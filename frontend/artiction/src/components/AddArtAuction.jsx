import React from 'react'
import { useParams } from 'react-router';
import '../styles/AddArtAuction.css';

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";


const AddArtAuction = () => {

    const { what } = useParams();


    return (
        <div className='place-items-center'>
            <form className="add-item w-200 border-dashed border-2 border-[var(--blue-md)] rounded mx-5 my-15 py-5 px-10 flex flex-col gap-1" onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-center text-2xl font-semibold mt-3'>{what} Details </h1>

                <label className='text-[20px] font-medium mt-5'>Name :</label>
                <input className='input-a' placeholder='eg: Sunset Overdrive' type="text" required />

                <label className='text-[20px] font-medium mt-5'>Medium :</label>
                <input className='input-a' placeholder='eg: Acrylic on Canvas' type="text" required />

                <label className='text-[20px] font-medium mt-5'>Size :</label>
                <input className='input-a' placeholder='eg: 24 x 18 inches' type="text" required />

                <label className='text-[20px] font-medium mt-5'>{what == 'Artwork' ? 'Price' : 'Starting Price'} :</label>
                <input className='input-a' placeholder='$ Enter Price' type="number" required />

                <label className='text-[20px] font-medium mt-5'>Description :</label>
                <input className='input-a' placeholder='eg: A vibrant explosion of colors...' type="text" required />

                <label className='text-[20px] font-medium mt-5'>Choose image :</label>
                <div className='flex gap-10 justify-center my-5'>
                    <div>
                        <input className='size-5' type="radio" name="artImg" />
                        <img className='rounded-full border-2 h-40 w-40' src={art1} alt="img" />
                    </div>
                    <div>
                        <input className='size-5' type="radio" name="artImg" />
                        <img className='rounded-full border-2 h-40 w-40' src={art2} alt="img" />
                    </div>
                    <div>
                        <input className='size-5' type="radio" name="artImg" />
                        <img className='rounded-full border-2 h-40 w-40' src={art3} alt="img" />
                    </div>

                </div>

            </form>
        </div>
    )
}

export default AddArtAuction;