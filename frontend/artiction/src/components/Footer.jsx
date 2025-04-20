import React, { useContext } from 'react';
import '../styles/Footer.css';
import fb from '../assets/fb_icon.png';
import ig from '../assets/ig_icon.png';
import x from '../assets/x_icon.png';
import { DataContext } from '../hooks/DataContext';

const Footer = () => {

  const {navigate,setActive} = useContext(DataContext);

  return (
    <footer className='text-white px-5 py-8 flex sm:flex-row flex-col sm:gap-0 gap-10 justify-between items-center'>

      <div className='flex flex-col sm:text-start text-center'>
        <div onClick={() => { navigate('/'); setActive('home')}} className="logo ">
          <h1>Artiction</h1>
        </div>
        <span>Designed & Developed By</span>
        <a href='https://mohanapriyan.netlify.app/' target='new' className='cursor-pointer hover:text-[16.5px] font-semibold'>MOHANAPRIYAN M</a>
        <p className='sm:hidden block text-sm text-gray-200'> &copy; 2025</p>

      </div>

      <div className='sm:flex hidden text-center flex-col justify-between gap-5'>
        <b className='font2 text-[20px] text-white'>Where Art Finds Its True Value.</b>
        <span className='text-sm text-gray-200'> &copy; 2025</span>
      </div>

      <div className='flex items-center gap-3'>

        <div className='flex flex-col gap-2 text-end'>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>

        <span className='footer-divider'>-</span>

        <div className='flex flex-col gap-2'>
          <b>Follow Us</b>
          <p className='flex gap-2'>
            <img className='h-auto w-5' src={fb} alt="icon" />
            Facebook
          </p>
          <p className='flex gap-2'>
            <img className='h-auto w-5' src={ig} alt="icon" />
            Instagram
          </p>
          <p className='flex gap-2'>
            <img className='h-5 w-5' src={x} alt="icon" />
            Twitter
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;