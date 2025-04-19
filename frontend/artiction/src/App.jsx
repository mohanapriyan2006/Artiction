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


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      {/*
      <Home/>
      <Auction/>
      <Artworks/> 
      <Login/>
      <Cart/>
      */}

       <Order/>
       
      <Footer/>
    </div>
  )
}

export default App;