import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App;