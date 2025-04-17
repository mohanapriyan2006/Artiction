import React, { useState } from 'react';
import '../styles/NavBar.css'

const NavBar = () => {

    const [active,setAvtive] = useState("home");

  return (
    <div className='NavBar h-18 drop-shadow-2xl bg-white flex justify-between m-auto items-center sticky top-0'>
        <div className="logo w-40">
            <p className='ml-10'>Artiction</p>
        </div>

        <div className="links mr-10">
            <ul className='flex gap-15 justify-end'>
                <li className={`font-semibold ${active == 'home'? 'active  blue-md ' : null}`} >Home</li>
                <li className={`font-semibold ${active == 'artworks'? 'active  blue-md ' : null}`}>Artworks</li>
                <li  className={`font-semibold ${active == 'auction'? 'active  blue-md ' : null}`}>Auction</li>
                <li className=' font-semibold -mt-1'><button className='log-btn'>Login</button></li>
            </ul>
        </div>
    </div>
  )
}


export default NavBar;