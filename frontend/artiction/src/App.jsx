import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;