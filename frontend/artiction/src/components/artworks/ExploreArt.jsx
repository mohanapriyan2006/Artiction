import React, { useContext, useState } from 'react';
import ReactPaginate from "react-paginate";
import searchI from "../../assets/search.png";
import { DataContext } from '../../hooks/DataContext';




const ExploreArt = () => {

  const { navigate,
    setOrderItems,
    cartItems,
    setCartItems,
    setActive,
    isLogined,
    direction, setDirection,
    sortBy, setSortBy,
    search,
    handleSearch,
    currentItems,
    pageCount,
    handlePageClick,
    Toast } = useContext(DataContext);

  const handleNotLogin = () => {
    Toast.fire({
      icon: "info",
      title: "Login ,then purchase 😊"
    });
  }


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

        <form className=' items-end flex' onSubmit={(e) => e.preventDefault()}>
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

          <p className='text-3xl font-light cursor-pointer -mt-4' onClick={() => direction == 'asc' ? setDirection('desc') : setDirection('asc')}>
            <i className={`${direction == 'desc' ? 'text-4xl font-extrabold' : ''}`}>↑</i>
            <i className={`${direction == 'asc' ? 'text-4xl font-extrabold' : ''}`}>↓</i>
          </p>
        </div>
      </div>


      {/* Art listing */}

      {/* 2x2 Grid */}
      {currentItems.length ? <div className="flex flex-wrap items-center justify-center gap-5 sm:my-15 my-10">
        {currentItems.map((item, id) => (
          <div key={id} className="border p-5 w-100 box-shadow text-center mx-2 ">
            <img className='h-auto w-60 m-auto' src={item.img} alt={item.name} />
            <h3 className="text-[20px] font-bold">{item.title}</h3>
            <h3 className="text-[18px] font-semibold">- {item.artist}</h3>
            <p className="text-[18px] font-semibold">Price: <span className='blue-md'>${item.fixedPrice}</span> </p>
            <p>Medium: {item.medium} | <span>Size: {item.size}</span> </p>
            <p className="text-gray-500">{item.directionription}</p>
            <div className='mt-5 flex items-center justify-center gap-3'>
              <button onClick={() => {
                if (isLogined) {
                  Toast.fire({
                    icon: "success",
                    title: "Art added to Cart 🛒"
                  });
                  const isItemInCart = cartItems.some(cart => cart.id === item.id);
                  if (!isItemInCart) {
                    setCartItems([...cartItems, item]);
                  }
                  else {
                    setCartItems(cartItems.map(cart => (
                      cart.id === item.id ? { ...cart, quantity: cart.quantity + 1, price: item.price + item.fixedPrice } : cart
                    )))
                  }
                }
                else {
                  handleNotLogin();
                  navigate('/login');
                }
              }} className="btn-2 cursor-pointer">
                Add to Cart
              </button>
              <button onClick={() => {
                if (isLogined) { navigate('/order'); setActive('order'); setOrderItems([item]); }
                else {
                  handleNotLogin();
                  navigate('/login');
                }
              }} className="btn-1 cursor-pointer">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
        : <p className='text-center font-medium blue-md text-2xl'>Artworks are Loading ...</p>}

      {/* Pagination Controls */}
      <div className="my-6 flex justify-center">
        <ReactPaginate
          previousLabel={"← previous"}
          nextLabel={"next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2"}
          pageClassName={"px-3 py-1 border  rounded-full "}
          activeClassName={"bg-[var(--blue-md)] text-white"}
          previousClassName={"px-3 py-1 border-2 border-[var(--blue-md)] rounded blue-md font-semibold page-btn cursor-pointer"}
          nextClassName={"px-3 py-1  border-2 border-[var(--blue-md)] rounded blue-md font-semibold page-btn cursor-pointer"}
        />
      </div>

    </div>
  )
}

export default ExploreArt;
