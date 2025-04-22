import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';
import Artworks from './components/Artworks';
import Auction from './components/Auction';
import Cart from './components/Cart';
import Login from './components/Login';
import Order from './components/Order';
import { Routes, Route } from "react-router-dom";
import Missing from './components/Missing';
import { DataProvider } from './hooks/DataContext';
import ScrollToTop from './hooks/ScrollToTop';
import Profile from './components/Profile';
import AddArtAuction from './components/AddArtAuction';


const App = () => {


  const Layout = ({ children }) => {
    return (
      <>
        <NavBar />
        {children}
        <Footer />
      </>
    );
  };

  return (
    <DataProvider>
      <ScrollToTop />
      <div className='App'>

        <Routes>

          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/artworks" element={<Layout><Artworks /></Layout>} />
          <Route path="/auction" element={<Layout><Auction /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/order" element={<Layout><Order /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/add/:what" element={<Layout><AddArtAuction /></Layout>} />
          <Route path="/add/:what" element={<Layout><AddArtAuction /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Missing />} />

        </Routes>

      </div>
    </DataProvider>
  )
}

export default App;