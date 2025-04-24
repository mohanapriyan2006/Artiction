import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from './api';

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.jpg";

import Swal from 'sweetalert2';
import axios from 'axios';




// const ArtworksFroProfile = [
//   {
//     id: "301",
//     img: art1,
//     title: "Sunset Overdrive",
//     medium: "Acrylic on Canvas",
//     size: "24 x 18 inches",
//     price: 1200,
//     description: "A vibrant explosion of colors capturing the energy of a city sunset.",
//   },
//   {
//     id: "302",
//     img: art2,
//     title: "Whispers of the Forest",
//     medium: "Oil on Canvas",
//     size: "28 x 22 inches",
//     price: 850,
//     description: "A serene depiction of nature where every leaf tells a secret.",
//   }
// ];

// const AuctionsForProfile = [
//   {
//     id: "201",
//     img: art3,
//     title: "Sunset Overdrive",
//     medium: "Acrylic on Canvas",
//     size: "24 x 18 inches",
//     price: 1200,
//     description: "A vibrant explosion of colors capturing the energy of a city sunset.",
//   }
// ];




export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  // artworks 
  // api/artworks

  const [Artworks, setArtworks] = useState([]);

  const fetchApiForArtwork = async () => {
    try {
      const res = await api.get('/artworks');
      setArtworks(res.data.content)
    } catch (err) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchApiForArtwork();
  }, [])

  // Auctions
  // api/auctions

  const [Auctions, setAuctions] = useState([]);
  const [liveAuctions, setLiveAuctions] = useState([]);
  const [endedAuctions, setEndedAuctions] = useState([]);

  const fetchApiForAuction = async () => {
    try {
      const res = await api.get('/auctions');
      setAuctions(res.data)
    } catch (err) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchApiForAuction();
  }, [])

  useEffect(() => {
    setLiveAuctions(() => (
      Auctions.filter(item => !item.sold)
    ));

    setEndedAuctions(() => (
      Auctions.filter(item => item.sold)
    ));
  }, [Auctions])

  // -----------------------

  // Sweat alert

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  // ----------------------------------

  // nav bar data
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ------------------------------

  // Explore Artworks data

  // Order items
  const [orderItems, setOrderItems] = useState([]);

  // Cart items
  const [cartItems, setCartItems] = useState([]);

  const [desc, setDesc] = useState(false);
  const [sortBy, setSortBy] = useState(' ');
  const [search, setSearch] = useState('');

  // search function
  const [filteredArt, setFilteredArt] = useState([...Artworks]);

  useEffect(() => {
    const result = Artworks.filter((art) => (
      art == '' ? [...art] : (art.title + art.artist).toLowerCase().includes(search.toLowerCase())
    )).reverse();
    setFilteredArt(result);
  }, [Artworks, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // paging
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // 2x2 layout

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredArt.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredArt.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // --------------------------

  // Cart Data

  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter(
      item => item.id !== id
    ))
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(prevItems => prevItems.map(
      item => (
        item.id === id ? { ...item, quantity: newQuantity, price: item.fixedPrice * newQuantity } : item
      )
    ))
  };

  const [nOfItems, setNOfItems] = useState(0);

  useEffect(() => {
    setNOfItems(cartItems.length);
  }, [cartItems])

  //  ------------------

  // Login Role

  const [role, setRole] = useState('Collector');

  // ---------------

  // Profile
  const [profileArtworks, setProfileArtworks] = useState([]);
  const [profileAuctions, setProfileAuctions] = useState([]);

  useEffect(() => {
    setProfileArtworks(Artworks.filter(item => item.artist == 'John Durai'));
    setProfileAuctions(liveAuctions.filter(item => item.artist == 'John Durai'));
  }, [Artworks, liveAuctions])


  const handleDeleteArt = async (id) => {
    try {
      await api.delete(`/artworks/${id}`);
      await fetchApiForArtwork();
    } catch (err) {
      console.log("deleteApi for artwork err: ", err);
    }
  }
  const handleDeleteAuction = async (id) => {
    try {
      await api.delete(`/auctions/${id}`);
      await fetchApiForAuction();
    } catch (err) {
      console.log("deleteApi for auction err: ", err);
    }
  }

  // ----------
  // AddArtAuction 

  const [addArtAuction, setAddArtAuction] = useState({
    id: 0,
    img: "",
    title: "",
    artist: "",
    medium: "",
    size: "",
    price: 0,
    description: ''
  })

  const [date, setDate] = useState("");

  const handleAddArtAuctionSubmit = async (e, what, id) => {
    e.preventDefault();
    if (what === 'Artwork') {
      const exists = profileArtworks.some(item => item.id === id);
      if (exists) {
        try {
          await api.put(`/artworks/${id}`, { ...addArtAuction });
          await fetchApiForArtwork();
          Toast.fire({
            icon: "success",
            title: "Artwork updated ✅"
          });
        } catch (err) {
          console.log("PutApi for artwork err: ", err);
          console.log(addArtAuction);
          Toast.fire({
            icon: "error",
            title: "Artwork updated Failed❗"
          });
        }

      } else {
        try {
          await api.post('/artworks', { ...addArtAuction, artist: "John Durai", fixedPrice: addArtAuction.price, quantity: 1 });
          await fetchApiForArtwork();
          Toast.fire({
            icon: "success",
            title: "Artwork added ✅"
          });
        } catch (err) {
          console.log("PostApi for artwork err: ", err);
          console.log(addArtAuction);
          Toast.fire({
            icon: "error",
            title: "Artwork added Failed❗"
          });
        }

      }
    } else {
      const exists = profileAuctions.some(item => item.id === id);
      if (exists) {
        try {
          await api.put(`/auctions/${id}`, { ...addArtAuction, sold: 0, endTime: date });
          await fetchApiForAuction();
          Toast.fire({
            icon: "success",
            title: "Auction updated ✅"
          });
        } catch (err) {
          console.log("PutApi for auction err: ", err);
          console.log(addArtAuction);
          Toast.fire({
            icon: "error",
            title: "Auction updated Failed❗"
          });
        }

      } else {
        try {
          await api.post('/auctions', { ...addArtAuction, artist: "John Durai", sold: 0, endTime: date });
          await fetchApiForAuction();
          Toast.fire({
            icon: "success",
            title: "Auction added ✅"
          });
        } catch (err) {
          console.log("PostApi for auction err: ", err);
          console.log(addArtAuction);
          Toast.fire({
            icon: "error",
            title: "Auction added Failed❗"
          });
        }

      }
    }

    setAddArtAuction({
      id: 0,
      title: "",
      description: "",
      img: "",
      medium: "",
      price: 0,
      size: ""
    })
    navigate('/profile');
  }




  // -----------



  return (
    <DataContext.Provider
      value={
        {
          active, setActive,
          navigate,
          isMenuOpen, setIsMenuOpen,
          toggleMenu,
          isLogined, setIsLogined,
          desc, setDesc,
          sortBy, setSortBy,
          search, handleSearch,
          currentItems, pageCount, handlePageClick,
          handleRemove, updateQuantity,
          Toast,
          orderItems, setOrderItems, cartItems, setCartItems,
          nOfItems, setNOfItems,
          role, setRole,
          profileArtworks, setProfileArtworks,
          profileAuctions, setProfileAuctions,
          handleDeleteArt, handleDeleteAuction,
          addArtAuction, setAddArtAuction, date, setDate, handleAddArtAuctionSubmit,
          Artworks, setArtworks,
          liveAuctions, endedAuctions,
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}