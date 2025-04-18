import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';
import Artworks from './components/Artworks';
import Auction from './components/Auction';
import Cart from './components/Cart';


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      {/* <Home/>
       <Artworks/> */}
       <Auction/>
       {/* <Cart/> */}
      <Footer/>
    </div>
  )
}

export default App;