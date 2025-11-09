/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.jpg";

import Swal from 'sweetalert2';




const ArtworksFroProfile = [
  {
    id: "301",
    img: art1,
    title: "Sunset Overdrive",
    medium: "Acrylic on Canvas",
    size: "24 x 18 inches",
    price: 1200,
    description: "A vibrant explosion of colors capturing the energy of a city sunset.",
  },
  {
    id: "302",
    img: art2,
    title: "Whispers of the Forest",
    medium: "Oil on Canvas",
    size: "28 x 22 inches",
    price: 850,
    description: "A serene depiction of nature where every leaf tells a secret.",
  }
];

const AuctionsForProfile = [
  {
    id: "201",
    img: art3,
    title: "Sunset Overdrive",
    medium: "Acrylic on Canvas",
    size: "24 x 18 inches",
    price: 1200,
    description: "A vibrant explosion of colors capturing the energy of a city sunset.",
  }
];




export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  // artworks 
  const [Artworks, setArtworks] = useState([
    {
      id: "201",
      img: art1,
      title: "Sunset Overdrive",
      artist: "Lena Carter",
      medium: "Acrylic on Canvas",
      size: "24 x 18 inches",
      price: 1200,
      fixedPrice: 1200,
      quantity: 1,
      sold: false,
      endTime: "2025-05-01 18:00:00",
      description: "A vibrant explosion of colors capturing the energy of a city sunset.",
    },
    {
      id: "202",
      img: art2,
      title: "Whispers of the Forest",
      artist: "Tomás Rivera",
      medium: "Oil on Canvas",
      size: "28 x 22 inches",
      price: 850,
      fixedPrice: 850,
      quantity: 1,
      sold: false,
      endTime: "2025-05-03 12:00:00",
      description: "A serene depiction of nature where every leaf tells a secret.",
    },
    {
      id: "203",
      img: art3,
      title: "Urban Mirage",
      artist: "Alex Chen",
      medium: "Mixed Media",
      size: "36 x 24 inches",
      price: 640,
      fixedPrice: 640,
      quantity: 1,
      sold: false,
      endTime: "2025-05-07 15:45:00",
      description: "A dreamy interpretation of city life, blending illusion and reality.",
    },
    {
      id: "204",
      img: art4,
      title: "Golden Horizon",
      artist: "Maya Desai",
      medium: "Watercolor on Paper",
      size: "20 x 16 inches",
      price: 1500,
      fixedPrice: 1500,
      quantity: 1,
      sold: false,
      endTime: "2025-05-05 10:30:00",
      description: "Golden tones spill over a peaceful landscape at dusk.",
    },
    {
      id: "205",
      img: art5,
      title: "Fragments of Time",
      artist: "Samuel Obeng",
      medium: "Charcoal and Pastel",
      size: "32 x 24 inches",
      price: 720,
      fixedPrice: 720,
      quantity: 1,
      sold: false,
      endTime: "2025-05-02 16:20:00",
      description: "An abstract expression of fleeting moments and forgotten memories.",
    },
    {
      id: "206",
      img: art6,
      title: "Silent Reflections",
      artist: "Anna Müller",
      medium: "Digital Art",
      size: "30 x 20 inches",
      price: 980,
      fixedPrice: 980,
      quantity: 1,
      sold: false,
      endTime: "2025-05-04 19:00:00",
      description: "Calm waters and muted tones reflecting the quiet depths of thought.",
    },
    {
      id: "207",
      img: art7,
      title: "Midnight Bloom",
      artist: "Haruto Saito",
      medium: "Ink on Silk",
      size: "18 x 24 inches",
      price: 1100,
      fixedPrice: 1100,
      quantity: 1,
      sold: false,
      endTime: "2025-05-06 13:00:00",
      description: "A mystical flower emerging under the moonlight, vibrant and rare.",
    },
    {
      id: "101",
      img: art1,
      title: "Starry Solitude",
      artist: "Elena Petrova",
      medium: "Watercolor on Paper",
      size: "20 x 16 inches",
      price: 2000,
      fixedPrice: 2000,
      quantity: 1,
      sold: true,
      endTime: "2023-04-15 14:30:00",
      description: "A lone figure beneath a swirling galaxy of stars — peaceful and contemplative.",
    },
    {
      id: "102",
      img: art2,
      title: "Rustic Memories",
      artist: "Carlos Mendez",
      medium: "Charcoal on Canvas",
      size: "30 x 22 inches",
      price: 800,
      fixedPrice: 800,
      quantity: 1,
      sold: false,
      endTime: "2023-04-10 09:15:00",
      description: "Old barns and forgotten fields captured in bold, gritty strokes.",
    },
    {
      id: "103",
      img: art3,
      title: "Azure Depths",
      artist: "Nina Yamamoto",
      medium: "Oil on Canvas",
      size: "40 x 30 inches",
      price: 3000,
      fixedPrice: 3000,
      quantity: 1,
      sold: true,
      endTime: "2023-04-18 21:00:00",
      description: "A deep dive into the blue — waves of emotion in every brushstroke.",
    },
  ])

  // nav bar data
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // { username, role }
  const [users, setUsers] = useState([]); // stored users
  const LS_USERS_KEY = 'artiction_users';
  const LS_CURRENT_USER_KEY = 'artiction_current_user';

  useEffect(() => {
    // load users
    try {
      const raw = localStorage.getItem(LS_USERS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      setUsers(Array.isArray(arr) ? arr : []);
    } catch { setUsers([]); }
    // load current user
    try {
      const rawCur = localStorage.getItem(LS_CURRENT_USER_KEY);
      if (rawCur) {
        const cu = JSON.parse(rawCur);
        if (cu && cu.username && cu.role) {
          setCurrentUser(cu);
          setIsLogined(true);
          setRole(cu.role);
        }
      }
    } catch { /* ignore */ }
  }, []);

  const persistUsers = (list) => {
    setUsers(list);
    localStorage.setItem(LS_USERS_KEY, JSON.stringify(list));
  };

  const registerUser = ({ username, password, role }) => {
    const uname = String(username || '').trim();
    const pwd = String(password || '').trim();
    const r = role === 'Artist' ? 'Artist' : 'Collector';
    if (!uname || !pwd) return { ok: false, message: 'Username & password required' };
    if (pwd.length < 6) return { ok: false, message: 'Password min 6 chars' };
    const exists = users.some(u => u.username.toLowerCase() === uname.toLowerCase());
    if (exists) return { ok: false, message: 'Username already exists' };
    const newUser = { username: uname, password: pwd, role: r, createdAt: Date.now() };
  persistUsers([...users, newUser]);
  try { Toast.fire({ icon: 'success', title: 'Registered' }); } catch { /* ignore */ }
    return { ok: true };
  };

  const loginUser = ({ username, password, role }) => {
    const uname = String(username || '').trim();
    const pwd = String(password || '').trim();
    if (!uname || !pwd) return { ok: false, message: 'Enter credentials' };
    const found = users.find(u => u.username.toLowerCase() === uname.toLowerCase());
    if (!found) return { ok: false, message: 'User not found' };
    if (found.password !== pwd) return { ok: false, message: 'Wrong password' };
    if (role && role !== found.role) return { ok: false, message: `Login as ${found.role}` };
    const cu = { username: found.username, role: found.role };
    setCurrentUser(cu);
    setIsLogined(true);
    setRole(found.role);
  localStorage.setItem(LS_CURRENT_USER_KEY, JSON.stringify(cu));
  try { Toast.fire({ icon: 'success', title: `Welcome ${found.username}` }); } catch { /* ignore */ }
    return { ok: true, user: cu };
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setIsLogined(false);
    localStorage.removeItem(LS_CURRENT_USER_KEY);
  };

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

  const [profileArtworks, setProfileArtworks] = useState(
    ArtworksFroProfile.map(item => item)
  );
  const [profileAuctions, setProfileAuctions] = useState(
    AuctionsForProfile.map(item => item)
  );

  const handleDeleteArt = (id) => {
    setProfileArtworks(prevArt => (
      prevArt.filter(item => item.id !== id)
    ));
    setArtworks(prevArt => (
      prevArt.filter(item => item.id !== id)
    ));
  }
  const handleDeleteAuction = (id) => {
    setProfileAuctions(prev => (
      prev.filter(item => item.id !== id)
    ))
  }

  // ----------
  // AddArtAuction 

  const [addArtAuction, setAddArtAuction] = useState({
    id: "",
    img: "",
    title: "",
    medium: "",
    size: "",
    price: 0,
    description: ''
  })




  // -----------

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

  return (
    <DataContext.Provider
      value={
        {
          active, setActive,
          navigate,
          isMenuOpen, setIsMenuOpen,
          toggleMenu,
          isLogined, setIsLogined,
          currentUser,
          users,
          registerUser, loginUser, logoutUser,
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
          addArtAuction, setAddArtAuction,
          Artworks, setArtworks
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}