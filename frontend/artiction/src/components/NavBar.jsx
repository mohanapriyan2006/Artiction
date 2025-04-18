import React, { useState } from 'react';
import '../styles/NavBar.css'

const NavBar = () => {

    const [active, setActive] = useState("home");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className='NavBar z-1000  h-18 bg-white flex justify-between m-auto items-center sticky top-0'>
            <div className="logo w-40 z-99999 bg-white">
                <p className='md:ml-10 ml-2 text-[var(--blue-dk)]'>Artiction</p>
            </div>

            {/* desktop nav */}
            <div className="links mr-10 hidden md:block">
                <ul className='flex gap-15 justify-end'>
                    <li className={`font-semibold ${active == 'home' ? 'active  blue-md ' : null}`} onClick={() => setActive('home')}>Home</li>
                    <li className={`font-semibold ${active == 'artworks' ? 'active  blue-md ' : null}`} onClick={() => setActive('artworks')}>Artworks</li>
                    <li className={`font-semibold ${active == 'auction' ? 'active  blue-md ' : null}`} onClick={() => setActive('auction')}>Auction</li>
                    <li className=' font-semibold -mt-1'><button className='log-btn'>Login</button></li>
                </ul>
            </div>

            {/* mobile toggle menu */}
            <div
                className=" menu-icon block md:hidden mr-4 cursor-pointer z-99999 bg-white "
                onClick={toggleMenu}
            >
                <div className="flex flex-col gap-1.5 border border-gray-400 rounded-[3px] p-1 w-10">
                    <span className={`block h-1 rounded- [3px] w-full bg-blue-md transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 rounded- [3px] w-full bg-blue-md transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 rounded- [3px] w-full bg-blue-md transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>

            {/* mobile toggled menu */}
            {isMenuOpen && (
                <div className="mobile-menu-div md:hidden absolute top-0 z-100 left-0 right-0 bg-white shadow-lg py-4 px-6">
                    <ul className='links flex flex-col gap-4'>
                        <li
                            className={`font-semibold py-2 ${active === 'home' ? 'active blue-md' : ''}`}
                            onClick={() => {
                                setActive('home');
                            }}
                        >
                            Home
                        </li>
                        <li
                            className={`font-semibold py-2 ${active === 'artworks' ? 'active blue-md' : ''}`}
                            onClick={() => {
                                setActive('artworks');
                            }}
                        >
                            Artworks
                        </li>
                        <li
                            className={`font-semibold py-2 ${active === 'auction' ? 'active blue-md' : ''}`}
                            onClick={() => {
                                setActive('auction');
                            }}
                        >
                            Auction
                        </li>
                        <li className='font-semibold py-2'>
                            <button className='log-btn'>Login</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}


export default NavBar;