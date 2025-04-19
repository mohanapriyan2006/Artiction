import React, { act, useState } from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';
import Artworks from './components/Artworks';
import Auction from './components/Auction';
import Cart from './components/Cart';
import Login from './components/Login';
import Order from './components/Order';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Missing from './components/Missing';


const App = () => {

  const [active, setActive] = useState("home");


  const Layout = ({ children }) => {
    return (
      <>
        <NavBar active={active} setActive={setActive} />
        {children}
        <Footer />
      </>
    );
  };

  return (
    <div className='App'>

      <Router>

        <Routes>

          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/artworks" element={<Layout><Artworks /></Layout>} />
          <Route path="/auction" element={<Layout><Auction /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/order" element={<Layout><Order /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Missing />} />

        </Routes>


      </Router>


    </div>
  )
}

export default App;