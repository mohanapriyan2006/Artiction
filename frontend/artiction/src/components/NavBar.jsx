import React, { useState } from 'react';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ({active,setActive}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='NavBar z-50 h-18 bg-white flex justify-between m-auto items-center sticky top-0'>
            <div className="logo w-40 z-50 bg-white">
                <h1 onClick={() => { navigate('/'); setActive('home') }} className='md:ml-10 ml-2 text-[var(--blue-dk)]'>Artiction</h1>
            </div>

            {/* desktop nav */}
            <div className="links mr-10 hidden md:block">
                <ul className='flex gap-15 justify-end'>
                    <li className={`font-semibold ${active == 'home' ? 'active blue-md' : ''}`} 
                        onClick={() => { navigate('/'); setActive('home') }}>Home</li>
                    <li className={`font-semibold ${active == 'artworks' ? 'active blue-md' : ''}`} 
                        onClick={() => { navigate('/artworks'); setActive('artworks') }}>Artworks</li>
                    <li className={`font-semibold ${active == 'auction' ? 'active blue-md' : ''}`} 
                        onClick={() => { navigate('/auction'); setActive('auction') }}>Auction</li>
                    <li className={`font-semibold -mt-1 ${active == 'login' ? 'hidden' : ''}`}><button className='log-btn' onClick={() =>{navigate('/login'); setActive('login') }}>Login</button></li>
                </ul>
            </div>

            {/* mobile toggle menu */}
            <div
                className="menu-icon block md:hidden mr-4 cursor-pointer z-50 bg-white"
                onClick={toggleMenu}
            >
                <div className="flex flex-col gap-1.5 border border-gray-400 rounded-[3px] p-1 w-10">
                    <span className={`block h-1 rounded-[3px] w-full bg-blue-md transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 rounded-[3px] w-full bg-blue-md transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 rounded-[3px] w-full bg-blue-md transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>

            {/* mobile toggled menu */}
            <div className={`${isMenuOpen ? 'mobile-menu-div' : 'menu-hide'} md:hidden absolute z-40 left-0 right-0 bg-white shadow-lg py-4 px-6`}>
                <ul className='links flex flex-col gap-4'>
                    <li
                        className={`font-semibold py-2 ${active === 'home' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/'); 
                            setActive('home');
                            setIsMenuOpen(false);
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`font-semibold py-2 ${active === 'artworks' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/artworks'); 
                            setActive('artworks');
                            setIsMenuOpen(false);
                        }}
                    >
                        Artworks
                    </li>
                    <li
                        className={`font-semibold py-2 ${active === 'auction' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/auction'); 
                            setActive('auction');
                            setIsMenuOpen(false);
                        }}
                    >
                        Auction
                    </li>
                    <li className='font-semibold py-2'>
                        <button className='log-btn' onClick={() => {navigate('/login'); setActive('login') }}>Login</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;