import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.jpg";
import Swal from 'sweetalert2';


// artworks for explore
const Artworks = [
  {
    img: art1,
    name: "Sunset Overdrive",
    price: "$1200",
    description: "A vibrant explosion of colors capturing the energy of a city sunset."
  },
  {
    img: art2,
    name: "Whispers of the Forest",
    price: "$850",
    description: "A serene depiction of nature where every leaf tells a secret."
  },
  {
    img: art3,
    name: "Urban Mirage",
    price: "$640",
    description: "A dreamy interpretation of city life, blending illusion and reality."
  },
  {
    img: art4,
    name: "Golden Horizon",
    price: "$1500",
    description: "Golden tones spill over a peaceful landscape at dusk."
  },
  {
    img: art5,
    name: "Fragments of Time",
    price: "$720",
    description: "An abstract expression of fleeting moments and forgotten memories."
  },
  {
    img: art6,
    name: "Silent Reflections",
    price: "$980",
    description: "Calm waters and muted tones reflecting the quiet depths of thought."
  },
  {
    img: art7,
    name: "Midnight Bloom",
    price: "$1100",
    description: "A mystical flower emerging under the moonlight, vibrant and rare."
  }
];

// cart items
const cartArtworks = [
  {
    id: "101",
    img: art3,
    title: "Starry Solitude",
    artist: "Elena Petrova",
    medium: "Watercolor on Paper",
    size: "20 x 16 inches",
    price: 3800,
    fixedPrice: 2000,
    sold: true,
    endTime: "2023-04-15 14:30:00",
  },
  {
    id: "102",
    img: art4,
    title: "Rustic Memories",
    artist: "Carlos Mendez",
    medium: "Charcoal on Canvas",
    size: "30 x 22 inches",
    price: 1500,
    fixedPrice: 800,
    sold: false,
    endTime: "2023-04-10 09:15:00",
  },
  {
    id: "103",
    img: art5,
    title: "Azure Depths",
    artist: "Nina Yamamoto",
    medium: "Oil on Canvas",
    size: "40 x 30 inches",
    price: 9200,
    fixedPrice: 3000,
    sold: true,
    endTime: "2023-04-18 21:00:00",
  }
];



export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

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

  const [desc, setDesc] = useState(false);
  const [sortBy, setSortBy] = useState(' ');
  const [search, setSearch] = useState('');

  // search function

  const filteredArt = Artworks.filter((art) => (
    art == '' ? [...art] : (art.name + art.description).toLowerCase().includes(search.toLowerCase())
  )).reverse()

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

  const [items, setItems] = useState(
    cartArtworks.map(item => (
      {
        ...item,
        quantity: 1
      }
    ))
  )

  const handleRemove = (id) => {
    setItems(prevItems => prevItems.filter(
      item => item.id !== id
    ))
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setItems(prevItems => prevItems.map(
      item => (
        item.id === id ? { ...item, quantity: newQuantity, price: item.fixedPrice * newQuantity } : item
      )
    ))
  };


  // -----------------------

  // Sweat alert

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

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
          items, handleRemove, updateQuantity,
          Toast
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}