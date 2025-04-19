import React, { useState } from 'react';
import ReactPaginate from "react-paginate";
import art1 from "../../assets/art1.jpg";
import art2 from "../../assets/art2.jpg";
import art3 from "../../assets/art3.jpg";
import art4 from "../../assets/art4.jpg";
import art5 from "../../assets/art5.jpg";
import art6 from "../../assets/art6.jpg";
import art7 from "../../assets/art7.jpg";
import searchI from "../../assets/search.png";
import { useNavigate } from 'react-router';


const Artworks = [
  {
    img: art1,
    name: "Sunset Overdrive",
    price: "$1200",
    description: "A vibrant explosion of colors capturing the energy of a city sunset."
  },
  {
    img: art2,
    name: "Whispers of the Forest",
    price: "$850",
    description: "A serene depiction of nature where every leaf tells a secret."
  },
  {
    img: art3,
    name: "Urban Mirage",
    price: "$640",
    description: "A dreamy interpretation of city life, blending illusion and reality."
  },
  {
    img: art4,
    name: "Golden Horizon",
    price: "$1500",
    description: "Golden tones spill over a peaceful landscape at dusk."
  },
  {
    img: art5,
    name: "Fragments of Time",
    price: "$720",
    description: "An abstract expression of fleeting moments and forgotten memories."
  },
  {
    img: art6,
    name: "Silent Reflections",
    price: "$980",
    description: "Calm waters and muted tones reflecting the quiet depths of thought."
  },
  {
    img: art7,
    name: "Midnight Bloom",
    price: "$1100",
    description: "A mystical flower emerging under the moonlight, vibrant and rare."
  }
];



const ExploreArt = () => {

  const navigate = useNavigate();

  const [desc, setDesc] = useState(false);
  const [sortBy, setSortBy] = useState(' ');
  const [search, setSearch] = useState('');

  // search function

  const filteredArt = Artworks.filter((art) => (
    art == '' ? [...art] : (art.name + art.description).toLowerCase().includes(search.toLowerCase())
  )).reverse()

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // paging
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // 2x2 layout

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredArt.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredArt.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };


  return (
    <div id='exploreArt' className='explore-art mt-20'>

      <div className="divider mb-10">
        <span>-</span>
        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>  Explore Artworks </b>
        <span>-</span>
      </div>

      <div className="title flex flex-col items-center">
        <b className='font2 font-bold sm:text-[30px] text-[22px]'>A Collection of Masterpieces</b>
        <span className='title-line'>-</span>
      </div>

      {/* search section */}
      <div className="filter-div place-content-center flex m-10  md:flex-row md:gap-0 gap-10 flex-col">

        <form className=' items-end flex'>
          <input 
          placeholder='Type something for search . . .' className='search-box sm:w-100 w-60  ' type="search" name="search" onChange={(e) => handleSearch(e)} 
          value={search}
          /> <img className='h-8 w-8 sm:relative sm:ml-0 ml-2 -left-11 -top-1 cursor-pointer' src={searchI} alt="search icon" />
        </form>

        <div className='flex text-[18px] font-semibold gap-3 text-center justify-center md:text-start md:justify-start'>

          <p className='sm:block hidden'><b className='mr-5 '>|</b> Sort by : </p>
          <button
            className={`${sortBy == 'title' ? 'btn-2' : 'btn-1'} cursor-pointer`}
            onClick={() => setSortBy('title')}
          >Title
          </button>
          <button
            className={`${sortBy == 'price' ? 'btn-2' : 'btn-1'} cursor-pointer`}
            onClick={() => setSortBy('price')}
          >Price
          </button>

          <p className='text-3xl cursor-pointer -mt-4' onClick={() => desc ? setDesc(false) : setDesc(true)}>
            <i className={`${desc ? 'text-4xl' : ''}`}>↑</i>
            <i className={`${!desc ? 'text-4xl' : ''}`}>↓</i>
          </p>
        </div>
      </div>


      {/* Art listing */}

      {/* 2x2 Grid */}
      <div className="flex flex-wrap items-center justify-center gap-5 sm:my-15 my-10">
        {currentItems.map((item,id) => (
          <div key={id} className="border p-5 w-100 box-shadow text-center mx-2 ">
            <img className='h-auto w-60 m-auto' src={item.img} alt={item.name} />
            <h3 className="text-[20px] font-bold">{item.name}</h3>
            <p className="text-[18px] font-semibold">{item.price}</p>
            <p>{item.description}</p>
            <div className='mt-5 flex items-center justify-center gap-3'>
              <button onClick={() => navigate('/cart')} className="btn-2 cursor-pointer">
                Add to Cart
              </button>
              <button onClick={() => navigate('/order')} className="btn-1 cursor-pointer">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="my-6 flex justify-center">
        <ReactPaginate
          previousLabel={"← previous"}
          nextLabel={"next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2"}
          pageClassName={"px-3 py-1 border rounded-full "}
          activeClassName={"bg-[var(--blue-md)] text-white"}
          previousClassName={"px-3 py-1 border-2 border-[var(--blue-md)] rounded blue-md font-semibold page-btn cursor-pointer"}
          nextClassName={"px-3 py-1 border-2 border-[var(--blue-md)] rounded blue-md font-semibold page-btn cursor-pointer"}
        />
      </div>

    </div>
  )
}

export default ExploreArt;