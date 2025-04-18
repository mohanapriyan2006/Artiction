import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';
import Artworks from './components/Artworks';


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      {/* <Home/> */}
      <Artworks/>
      <Footer/>
    </div>
  )
}

export default App;