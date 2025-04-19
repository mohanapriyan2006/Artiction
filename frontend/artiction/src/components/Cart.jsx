import React, { useState } from 'react';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.jpg';
import trash from '../assets/trash.png';
import order from '../assets/order.png';
import payment from '../assets/payment.png';
import '../styles/Cart.css';
import { useNavigate } from 'react-router';

const cartArtworks = [
    {
        id: "101",
        img: art3,
        title: "Starry Solitude",
        artist: "Elena Petrova",
        medium: "Watercolor on Paper",
        size: "20 x 16 inches",
        price: 3800,
        sold: true,
        endTime: "2023-04-15 14:30:00",
    },
    {
        id: "102",
        img: art4,
        title: "Rustic Memories",
        artist: "Carlos Mendez",
        medium: "Charcoal on Canvas",
        size: "30 x 22 inches",
        price: 1500,
        sold: false,
        endTime: "2023-04-10 09:15:00",
    },
    {
        id: "103",
        img: art5,
        title: "Azure Depths",
        artist: "Nina Yamamoto",
        medium: "Oil on Canvas",
        size: "40 x 30 inches",
        price: 9200,
        sold: true,
        endTime: "2023-04-18 21:00:00",
    }
];

const Cart = () => {

    const navigate = useNavigate();

    const [items, setItems] = useState(
        cartArtworks.map(item => (
            {
                ...item,
                quantity: 1
            }
        ))
    )

    const handleRemove = (id) => {
        setItems(prevItems => prevItems.filter(
            item => item.id !== id
        ))
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        setItems(prevItems => prevItems.map(
            item => (
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        ))
    };


    return (
        <div className='mt-15'>
            {/* Your Art Cart */}
            <div className="title flex flex-col items-center mt-5">
                <b className='font2 font-bold sm:text-[30px] text-[22px]'>Your Artwork Cart</b>
                <span className='title-line'>-</span>
                <p className='text-center text-gray-600 text-[18px] my-5 '>Review your selected artwork(s) before you proceed to checkout. Each piece is one-of-a-kind — make it yours!</p>
            </div>

            {items.length ? <div className="cart-items flex flex-col mx-2 items-center sm:gap-8 gap-0 my-8">
                {items.map((item) => (
                    <div key={item.id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 py-5 px-2  md:w-200 sm:w-160 sm:scale-100 scale-80 '>
                        <img className='h-auto w-50' src={item.img} alt={item.title} />
                        <div className='text-center'>
                            <p className='sm:text-[24px] text-[20px] font-semibold my-3'>" <span className='blue-md'>{item.title}</span> " - {item.artist}</p>
                            <p className='text-gray-600 text-[18px] font-medium'>Mediun: {item.medium}</p>
                            <p className='text-gray-600 text-[18px] font-medium'>Size: {item.size}</p>
                            <div className='flex items-center justify-center gap-5'>
                                <p className='text-[22px] font-semibold mt-2'>Price: $<span className='blue-md' >{item.price}</span></p>
                                <p className='text-[22px] font-semibold mt-2'>Shipping: $<span className='blue-md' >100</span></p>
                            </div>
                            <p className=' text-[20px] font-medium mt-1'>Estimated Delivery: 5-7 business days</p>

                            <div className='mt-8 mx-8 flex flex-col-reverse sm:flex-row gap-8 items-center justify-center'>
                                <button
                                    className="btn-2 cursor-pointer flex gap-1"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    <img className='h-auto w-6 -ml-2' src={trash} alt="remove icon" />
                                    Remove
                                </button>

                                <div className='flex gap-3'>
                                    <p className='font-semibold text-[20px]'>Quantity: </p>
                                    <button
                                        className='btn-q'
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <p className='text-2xl blue-md font-bold'>{item.quantity}</p>
                                    <button
                                        className='btn-q'
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                : <h6 className='text-2xl font-semibold text-center my-20'> Your Cart is <span className='text-red-800'>Empty !</span></h6>}

            {/*  Order Summary */}
            <div className="title flex flex-col items-center my-5">
                <b className='font2 font-bold sm:text-[30px] text-[22px]'>Order Summary</b>
                <span className='title-line'>-</span>
            </div>

            <div className="order-summary flex md:flex-row flex-col  mx-5 justify-center md:gap-10 gap-0">

                <img className='h-auto w-100 md:m-0 m-auto' src={payment} alt="order img" />

                <div className='flex flex-col justify-center items-center gap-5 md:scale-100 scale-80'>

                    <div className='border-dashed border-2 rounded border-[var(--blue-md)] flex flex-col  md:w-120 sm:p-10 p-5 gap-3 text-[22px] font-semibold'>

                        <p className='flex  '>
                            <span className='flex-1/2'>Subtotal</span>
                            <b className='flex-1/2'>: <span className='font-bold blue-md text-[24px]'>$ 10,000</span></b>
                        </p>
                        <p className='flex  '>
                            <span className='flex-1/2'>Shipping Total</span>
                            <b className='flex-1/2'>: <span className='font-bold blue-md text-[24px]'>$ 1000</span></b>
                        </p>
                        <p className='flex  '>
                            <span className='flex-1/2'>Framing Charges</span>
                            <b className='flex-1/2'>: <span className='font-bold blue-md text-[24px]'>$ 100</span></b>
                        </p>

                        <p className='flex sm:text-[28px] text-[24px]'>
                            Total Payable
                            <b> : <span className='font-bold blue-md'>$ 1000</span></b>
                        </p>

                    </div>

                    <button onClick={() => navigate('/order')} className="btn-2 flex text-[22px] font-semibold gap-2 w-55  text-center cursor-pointer">
                        <img src={order} alt="order icon" />
                        Checkout</button>

                </div>
            </div>

        </div>
    );
};

export default Cart;