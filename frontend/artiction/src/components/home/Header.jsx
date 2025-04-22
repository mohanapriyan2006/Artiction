import React, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import home_img from '../../assets/home_header.png';

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className='home-header mt-5 m-auto flex md:flex-row flex-col items-center justify-around'>
      <div className="header_img">
        <img
          src={home_img}
          alt="Home image preview"
          className={`sm:w-110 w-80 h-auto ${imageLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="header_content sm:w-150 w-fit md:mt-10 mt-0 text-center md:text-start">
        <h1 className='font2 sm:text-6xl text-4xl'>Bid on Creativity, Own a Masterpiece!</h1>
        <p className='font-medium text-gray-600 my-5 text-[20px] sm:mx-0 mx-1'>
          Where art meets opportunity! Explore rare and stunning masterpieces, place your bid, and make them yours. Join a vibrant community of collectors and artists in the ultimate auction experience!
        </p>
        <a href='#featured'>
          <button className='oval-btn' role='button' type="button">Explore</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
