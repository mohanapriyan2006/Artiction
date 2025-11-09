import React, { useContext, useState } from 'react';
import order from '../assets/order.png';
import '../styles/NavBar.css';
import { DataContext } from '../hooks/DataContext';

const UserIcon = ({ color }) => (
    <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NavBar = () => {
    const {
        active,
        setActive,
        navigate,
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        isLogined,
        nOfItems,
        logoutUser
    } = useContext(DataContext);

    const [userIconColor, setUserIconColor] = useState("#8f8f8f");

    const handleUserIconHover = (isHovering) => {
        setUserIconColor(isHovering ? "#0d00c2" : "#8f8f8f");
    };


    return (
        <div className='NavBar z-50 h-18 bg-white flex justify-between m-auto items-center sticky top-0'>
            <div className="logo w-40 z-50 bg-white">
                <h1
                    onClick={() => { navigate('/'); setActive('home') }}
                    className='md:ml-10 ml-2 text-[var(--blue-dk)] cursor-pointer'
                >
                    Artiction
                </h1>
            </div>

            {/* desktop nav */}
            <div className="links mr-10 hidden md:block">
                <ul className='flex gap-8 items-center'>
                    <li
                        className={`font-semibold cursor-pointer ${active === 'home' ? 'active blue-md' : ''}`}
                        onClick={() => { navigate('/'); setActive('home') }}
                    >
                        Home
                    </li>
                    <li
                        className={`font-semibold cursor-pointer ${active === 'artworks' ? 'active blue-md' : ''}`}
                        onClick={() => { navigate('/artworks'); setActive('artworks') }}
                    >
                        Artworks
                    </li>
                    <li
                        className={`font-semibold cursor-pointer ${active === 'auction' ? 'active blue-md' : ''}`}
                        onClick={() => { navigate('/auction'); setActive('auction') }}
                    >
                        Auction
                    </li>
                    <li className={`font-semibold ${isLogined ? 'hidden' : ''}`}>
                        <button
                            className='log-btn'
                            onClick={() => { navigate('/login'); setActive('login') }}
                        >
                            Login
                        </button>
                    </li>
                    <li className={`font-semibold ${isLogined ? '' : 'hidden'}`}>
                        <button
                            className='log-btn flex items-center'
                            onClick={() => { navigate('/cart'); setActive('cart') }}
                        >
                            <img className='h-5 w-5 mr-1' src={order} alt="order icon" />
                            Cart <span className={` ${nOfItems ? '' : 'hidden'} bg-white text-red-600 rounded-full w-4 h-4 text-[12px] font-semibold relative -top-2 left-3`}>{nOfItems}</span>
                        </button>
                    </li>
                    <li
                        className={`cursor-pointer -ml-5 ${isLogined ? '' : 'hidden'}`}
                        onMouseEnter={() => handleUserIconHover(true)}
                        onMouseLeave={() => handleUserIconHover(false)}
                        onClick={() => { navigate('/profile'); setActive('profile') }}
                    >
                        <UserIcon color={userIconColor} />
                    </li>
                    <li className={`font-semibold ${isLogined ? '' : 'hidden'}`}>
                        <button
                            className='log-btn'
                            onClick={() => { logoutUser(); navigate('/login'); setActive('login'); }}
                        >
                            Logout
                        </button>
                    </li>
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
                        className={`font-semibold py-2 cursor-pointer ${active === 'home' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/');
                            setActive('home');
                            setIsMenuOpen(false);
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`font-semibold py-2 cursor-pointer ${active === 'artworks' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/artworks');
                            setActive('artworks');
                            setIsMenuOpen(false);
                        }}
                    >
                        Artworks
                    </li>
                    <li
                        className={`font-semibold py-2 cursor-pointer ${active === 'auction' ? 'active blue-md' : ''}`}
                        onClick={() => {
                            navigate('/auction');
                            setActive('auction');
                            setIsMenuOpen(false);
                        }}
                    >
                        Auction
                    </li>
                    <li className={`font-semibold ${isLogined ? 'hidden' : ''}`}>
                        <button
                            className='log-btn'
                            onClick={() => { navigate('/login'); setActive('login') }}
                        >
                            Login
                        </button>
                    </li>
                    <li className={`font-semibold ${isLogined ? '' : 'hidden'}`}>
                        <button
                            className='log-btn flex items-center'
                            onClick={() => { navigate('/cart'); setActive('cart') }}
                        >
                            <img className='h-5 w-5 mr-1' src={order} alt="order icon" />
                            Cart  <span className={` ${nOfItems ? '' : 'hidden'} bg-white text-red-600 rounded-full w-4 h-4 text-[12px] font-semibold relative -top-2 left-3`}>{nOfItems}</span>
                        </button>
                    </li>
                    <li
                        className={`flex text-[20px] font-semibold gap-2 cursor-pointer ${isLogined ? '' : 'hidden'}`}
                        onMouseEnter={() => handleUserIconHover(true)}
                        onMouseLeave={() => handleUserIconHover(false)}
                        onClick={() => { navigate('/profile'); setActive('profile') }}
                    >
                        <UserIcon color={userIconColor} />
                        Profile
                    </li>
                    <li className={`font-semibold ${isLogined ? '' : 'hidden'}`}>
                        <button
                            className='log-btn'
                            onClick={() => { logoutUser(); setIsMenuOpen(false); navigate('/login'); setActive('login'); }}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;