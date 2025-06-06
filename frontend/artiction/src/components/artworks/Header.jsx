import React from 'react';
import img from '../../assets/art_header.jpg';

const Header = () => {
    return (
        <div className='artwork-header my-5 m-auto flex md:flex-row flex-col-reverse items-center justify-around px-1 pt-10'>
            
            <div className="header_content  sm:w-150 w-fit md:mt-10 mt-0 md:pl-10 pl-0 text-center md:text-start">
                <h1 className='font2 sm:text-6xl text-4xl'>Explore Unique Masterpieces</h1>
                <p className='font-medium text-gray-600 my-5 text-[20px] sm:mx-0 mx-1'>Discover a curated collection of stunning artworks from talented artists around the world. From timeless classics to contemporary creations — every piece tells a story.</p>
                <a href='#exploreArt'><button className='oval-btn' role='button' type="button">View Artworks</button></a>
                </div>

            <div className="header_img">
                <img src={img} alt="image preview" className="sm:w-150 w-90 h-auto" />
            </div>
        </div>
    )
}

export default Header;