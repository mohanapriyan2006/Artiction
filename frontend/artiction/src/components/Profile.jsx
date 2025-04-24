import React, { useContext, useState } from 'react';
import artistP from '../assets/artist.png';
import userP from '../assets/collector.png';
import fbI from '../assets/fbI.png';
import instaI from '../assets/instaI.png';
import xI from '../assets/xI.png';
import trash from '../assets/trash.png';
import { DataContext } from '../hooks/DataContext';


const Profile = () => {
    const { navigate,
        role,
        setRole,
        profileArtworks,
        profileAuctions,
        handleDeleteArt, handleDeleteAuction,
        setAddArtAuction
    } = useContext(DataContext);



    return (
        <div className='profile'>
            <div className="title flex flex-col items-center mt-10">
                <b className='font2 font-bold sm:text-[30px] text-[22px]'>Profile</b>
                <span className='title-line'>-</span>
            </div>

            <div className="sm:border rounded p-5 sm:mx-4 my-8">
                {/* personal details */}
                <div className="profile-details flex sm:flex-row flex-col p-5 gap-10">
                    <img className='h-auto sm:w-70 w-50 m-auto border-3 rounded-[20px] border-[var(--blue-lt)]' src={role == 'Artist' ? artistP : userP} alt="user profile" />

                    <div className="user-info flex flex-col gap-3 sm:text-[20px] text-[18px]">
                        <h6 className='text-[22px] font-medium'>Basic Information : </h6>
                        <div className='flex gap-8'>
                            <p >Name : {role == 'Artist' ? "John Durai" : "Adam smith"}</p>
                            <p className='border-l-1 pl-5 '>Username  : {role == 'Artist' ? "johndurai01" : "adamsmith07"}</p>
                        </div>
                        <p >Bio : "Exploring emotions through brushstrokes. Specializing in contemporary abstract works that reflect human experiences."</p>
                        <p >Role : <span className='font-medium blue-md'>{role}</span></p>
                        <h6 className='flex text-[22px] font-medium'>Social Links :
                            <img src={instaI} alt="icon" />
                            <img src={fbI} alt="icon" />
                            <img src={xI} alt="icon" />
                        </h6>
                    </div>
                </div>

                {role == 'Artist' ? <div>
                    {/* artworks */}
                    <div className="divider mt-10">
                        <span>-</span>
                        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>My Artworks</b>
                        <span>-</span>
                    </div>

                    {profileArtworks.length ? <div className="my-artworks flex flex-col mx-2 items-center sm:gap-8 gap-30 sm:my-8 my-20">
                        {profileArtworks.map((item) => (
                            <div key={item.id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 p-5  md:w-200 sm:w-160  '>
                                <img className='h-auto w-50' src={item.img} alt={item.title} />
                                <div className='text-center'>
                                    <p className='sm:text-[24px] text-[20px] font-semibold my-3'>" <span className='blue-md'>{item.title}</span> "</p>
                                    <p className='text-gray-600 text-[18px] font-medium'>Medium: {item.medium}</p>
                                    <p className='text-gray-600 text-[18px] font-medium'>Size: {item.size}</p>
                                    <p className='text-[22px] font-semibold mt-2'>Price: $<span className='blue-md' >{item.price}</span></p>
                                    <p className=' text-[18px] font-medium mt-1'>Description : {item.description}</p>

                                    <div className='mt-8 mx-8 flex flex-col-reverse sm:flex-row gap-8 items-center justify-center'>
                                        <button className="btn-2 cursor-pointer flex gap-1" onClick={() => handleDeleteArt(item.id)}>
                                            <img className='h-auto w-6 -ml-2' src={trash} alt="remove icon" />
                                            Delete
                                        </button>
                                        <button className="btn-1 cursor-pointer flex gap-1" onClick={() => { navigate('/add/Artwork'); setAddArtAuction(item) }}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> : <div className='place-content-center place-items-center'>
                        <h6 className='text-2xl font-semibold text-center mt-20'> Your Artworks are <span className='text-red-800'>Empty !</span></h6>
                    </div>}

                    <div className='flex justify-center mt-15'>
                        <button className="btn-2 cursor-pointer" onClick={() => navigate('/add/Artwork')}>
                            + Add Artworks
                        </button>
                    </div>

                    {/* auctions */}
                    <div className="divider mt-20">
                        <span>-</span>
                        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>My Auctions</b>
                        <span>-</span>
                    </div>

                    {profileAuctions.length ? <div className="my-auctions flex flex-col mx-2 items-center sm:gap-8 gap-30 sm:my-8 my-20">
                        {profileAuctions.map((item) => (
                            <div key={item.id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 p-5  md:w-200 sm:w-160  '>
                                <img className='h-auto w-50' src={item.img} alt={item.title} />
                                <div className='text-center'>
                                    <p className='sm:text-[24px] text-[20px] font-semibold my-3'>" <span className='blue-md'>{item.title}</span> "</p>
                                    <p className='text-gray-600 text-[18px] font-medium'>Medium: {item.medium}</p>
                                    <p className='text-gray-600 text-[18px] font-medium'>Size: {item.size}</p>
                                    <p className='text-[22px] font-semibold mt-2'>Starting Price: $<span className='blue-md' >{item.price}</span></p>
                                    <p className=' text-[18px] font-medium mt-1'>Description : {item.description}</p>

                                    <div className='mt-8 mx-8 flex flex-col-reverse sm:flex-row gap-8 items-center justify-center'>
                                        <button className="btn-2 cursor-pointer flex gap-1" onClick={() => handleDeleteAuction(item.id)}>
                                            <img className='h-auto w-6 -ml-2' src={trash} alt="remove icon" />
                                            Delete
                                        </button>
                                        <button className="btn-1 cursor-pointer flex gap-1" onClick={() => { navigate('/add/Auction'); setAddArtAuction(item) }}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> : <div className='place-content-center place-items-center'>
                        <h6 className='text-2xl font-semibold text-center mt-20'> Your Auctions are <span className='text-red-800'>Empty !</span></h6>
                    </div>}

                    <div className='flex justify-center mt-15'>
                        <button className="btn-2 cursor-pointer" onClick={() => navigate('/add/Auction')}>
                            + Add Auction
                        </button>
                    </div>
                </div>
                    : <div className='my-20'>
                        <div className="divider mt-10">
                            <span>-</span>
                            <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>My Artworks</b>
                            <span>-</span>
                        </div>
                        <p className='text-center mt-10 text-2xl'>To Add Artworks and Auctions</p>
                        <div className='flex justify-center my-8'>
                            <button className="btn-2 cursor-pointer" onClick={() => setRole('Artist')}>
                                Switch to Artist
                            </button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Profile;