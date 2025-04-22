import React, { useContext } from 'react'
import { useParams } from 'react-router';
import '../styles/AddArtAuction.css';

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";

import { DataContext } from '../hooks/DataContext';


const AddArtAuction = () => {

    const { what } = useParams();

    const { navigate,
        addArtAuction,
        setAddArtAuction,
        setProfileArtworks,
        setProfileAuctions,
        Toast,
    } = useContext(DataContext)


    const handleAddArtAuctionSubmit = (e) => {
        e.preventDefault();
        if (what == 'Artwork') {
            setProfileArtworks(prev => {
                const exists = prev.some(item => item.id === addArtAuction.id);
                if (exists) {
                    return prev.map(item =>
                        item.id === addArtAuction.id ? { ...addArtAuction } : item
                    );
                } else {
                    const newItem = { ...addArtAuction, id: prev.length + 1 };
                    return [...prev, newItem];
                }
            });
            Toast.fire({
                icon: "success",
                title: "Artwork added ✅"
            });
        } else {
            setProfileAuctions(prev => {
                const exists = prev.some(item => item.id === addArtAuction.id);
                if (exists) {
                    return prev.map(item =>
                        item.id === addArtAuction.id ? { ...addArtAuction } : item
                    );
                } else {
                    const newItem = { ...addArtAuction, id: prev.length + 1 };
                    return [...prev, newItem];
                }
            });
            Toast.fire({
                icon: "success",
                title: "Auction added ✅"
            });
        }

        setAddArtAuction({
            id: "",
            title: "",
            description: "",
            img: "",
            medium: "",
            price: 0,
            size: ""
        })
        navigate('/profile');
    }


    return (
        <div className='place-items-center'>
            <form
                className="add-item md:w-200 sm:w-150 w-70 border-dashed border-2 border-[var(--blue-md)] rounded mx-5 my-15 py-5 sm:px-10 px-3 flex flex-col gap-1"
                onSubmit={(e) => handleAddArtAuctionSubmit(e)}
            >
                <h1 className='text-center text-2xl font-semibold mt-3'>{what} Details </h1>

                <label className='text-[20px] font-medium mt-5'>Title :</label>
                <input
                    onChange={(e) => setAddArtAuction(prev => ({ ...prev, title: e.target.value }))}
                    value={addArtAuction.title}
                    className='input-a'
                    placeholder='eg: Sunset Overdrive'
                    type="text" required
                />

                <label className='text-[20px] font-medium mt-5'>Medium :</label>
                <input
                    onChange={(e) => setAddArtAuction(prev => ({ ...prev, medium: e.target.value }))}
                    value={addArtAuction.medium}
                    className='input-a'
                    placeholder='eg: Acrylic on Canvas'
                    type="text" required
                />

                <label className='text-[20px] font-medium mt-5'>Size :</label>
                <input
                    onChange={(e) => setAddArtAuction(prev => ({ ...prev, size: e.target.value }))}
                    value={addArtAuction.size}
                    className='input-a'
                    placeholder='eg: 24 x 18 inches'
                    type="text" required
                />

                <label className='text-[20px] font-medium mt-5'>{what == 'Artwork' ? 'Price' : 'Starting Price'} :</label>
                <input
                    onChange={(e) => setAddArtAuction(prev => ({ ...prev, price: e.target.value }))}
                    value={addArtAuction.price ? addArtAuction.price : ''}
                    className='input-a'
                    placeholder='$ Enter Price'
                    type="number" required
                />

                <label className='text-[20px] font-medium mt-5'>Description :</label>
                <textarea onChange={(e) => setAddArtAuction(prev => ({ ...prev, description: e.target.value }))}
                    value={addArtAuction.description}
                    className='textarea-o'
                    placeholder='eg: A vibrant explosion of colors...'
                    type="text" required></textarea>

                <label className='text-[20px] font-medium mt-5'>Choose image :</label>
                <div className='flex gap-10 justify-center mt-5 border-b pb-2'>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art1 }))}
                            className='size-5'
                            type="radio" name="artImg" required
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art1} alt="img" />
                    </div>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art2 }))}
                            className='size-5'
                            type="radio" name="artImg"
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art2} alt="img" />
                    </div>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art3 }))}
                            className='size-5'
                            type="radio" name="artImg"
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art3} alt="img" />
                    </div>
                </div>
                <div className='flex gap-10 justify-center mt-2 mb-5  border-b pb-2'>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art4 }))}
                            className='size-5'
                            type="radio" name="artImg" required
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art4} alt="img" />
                    </div>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art5 }))}
                            className='size-5'
                            type="radio" name="artImg"
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art5} alt="img" />
                    </div>
                    <div>
                        <input
                            onClick={() => setAddArtAuction(prev => ({ ...prev, img: art6 }))}
                            className='size-5'
                            type="radio" name="artImg"
                        />
                        <img className='rounded-full border-2 md:h-40 md:w-40 h-20 w-20' src={art6} alt="img" />
                    </div>
                </div>

                <div className='flex justify-center mt-15'>
                    <button className="btn-2 cursor-pointer" type='submit'>
                        + Add {what == 'Artwork' ? "Artworks" : "Auction"}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddArtAuction;