import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';
import Artworks from './components/Artworks';
import Auction from './components/Auction';
import Cart from './components/Cart';
import Login from './components/Login';


const App = () => {
  return (
    <div className='App'>
      {/* <NavBar/> */}
      {/*
      <Home/>
      <Auction/>
      <Artworks/> 
      <Cart/>
      */}

  <Login/>
       
       
      {/* <Footer/> */}
    </div>
  )
}

export default App;