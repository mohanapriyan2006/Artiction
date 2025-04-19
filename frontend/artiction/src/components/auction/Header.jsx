import React from 'react';
import img from '../../assets/auction_header.png';

const Header = () => {
  return (
    <div className='auction-header my-10 m-auto flex md:flex-row flex-col items-center justify-around'>
      <div className="header_img">
        <img src={img} alt="Home image preview" className="sm:w-110 w-80 h-auto" />
      </div>
      <div className="header_content  sm:w-150 w-fit md:mt-10 mt-0 text-center md:text-start">
        <h1 className='font2 sm:text-6xl text-4xl'>Bid on Masterpieces from Talented Artists!</h1>
        <p className='font-medium text-gray-600 my-5 text-[20px] sm:mx-0 mx-1'>Dive into a world of stunning creativity and own a unique piece of art that speaks to your soul. Here, collectors, art lovers, and newcomers alike can explore, bid, and win beautiful artworks from emerging and established artists.</p>
        <a href='#exploreAuction'><button className='oval-btn' role='button' type="button">Explore</button></a>
      </div>
    </div>
  )
}

export default Header