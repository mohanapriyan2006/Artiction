import React from 'react';
import img1 from '../../assets/art1.jpg';
import img2 from '../../assets/art2.jpg';
import img3 from '../../assets/art3.jpg';
import img4 from '../../assets/home_auction.png';
import { useNavigate } from 'react-router';

const Featured = () => {

  const navigate = useNavigate();

  return (
    <div id='featured' className='home-featured mb-10'>


      <div className="divider mt-15">
        <span>-</span>
        <b className='font2 font-bold  text-[28px] sm:text-[32px] -mt-5'> Featured Artworks </b>
        <span>-</span>
      </div>

      {/* A Collection of Masterpieces */}
      <div className="title flex flex-col items-center mt-5 ">
        <b className='font2 font-bold sm:text-[30px] text-[22px] text-center'>A Collection of Masterpieces</b>
        <span className='title-line w-25'>-</span>
      </div>

      <div className="artwork-feature mt-10 flex md:flex-row flex-col-reverse justify-around items-center">
        <div className='mt-5 ml-5 '>
          <ul className='text-[24px] font-[500] flex flex-col gap-4 mb-8 list-disc'>
            <li>Exquisite Selections</li>
            <li> Filter & Search</li>
            <li>Virtual Gallery</li>
          </ul>
          <button onClick={() => navigate('/artworks')} className='oval-btn' role='button' type="button"><span>Explore</span></button>
        </div>
        <div className='flex justify-around gap-10'>
          <img className='md:w-50 md:h-auto w-40 h-50' src={img1} alt="img" />
          <img className='md:w-50 md:h-auto w-40 h-50' src={img2} alt="img" />
          <img className='md:w-50 md:h-auto sm:block hidden w-40 h-50' src={img3} alt="img" />
        </div>
      </div>

      {/* Live & Upcoming Auctions */}
      <div className="title flex flex-col items-center mt-15 ">
        <b className='font2 font-bold sm:text-[30px] text-[22px]  text-center'>Live & Upcoming Auctions</b>
        <span className='title-line w-25'>-</span>
      </div>

      <div className="auction-feature mt-10 mx-10 flex justify-evenly sm:flex-row flex-col">
        <div className='flex-1/2 m-auto'>
          <img className='h-auto w-80 m-auto' src={img4} alt="img" />
        </div>
        <div className='text-center py-10 flex-1/2 '>
          <h4 className='font-semibold mb-4 text-[28px]'>Bid on Exclusive Art</h4>
          <p className='text-[20px] mb-5 text-gray-600'>  Engage in exciting real-time auctions
            and claim rare masterpieces before they’re gone. Whether you're a seasoned collector or a first-time bidder, our platform ensures a seamless and thrilling auction experience.</p>
          <button  onClick={() => navigate('/auction')} className='oval-btn' role='button' type="button"><span>Explore</span></button>
        </div>
      </div>

    </div>
  )
}

export default Featured