import React, { useContext } from 'react';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import order from '../assets/order.png';
import '../styles/Order.css'
import { DataContext } from '../hooks/DataContext';
import Swal from 'sweetalert2';



const orderItems = [
    {
        id: "101",
        img: art3,
        title: "Starry Solitude",
        artist: "Elena Petrova",
        medium: "Watercolor on Paper",
        size: "20 x 16 inches",
        price: 3800,
        quantity: 1,
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
        quantity: 2,
        sold: false,
        endTime: "2023-04-10 09:15:00",
    }
];

const Order = () => {

    const {navigate,setActive} = useContext(DataContext);

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'success',
            timer: 4000,
            title: 'Order Comfirmation',
            text: '📦 Your Order Successfully Placed ✔️'
        })
    }

    return (
        <div className='order-page'>
            <div className="title flex flex-col items-center my-5">
                <b className='font2 font-bold sm:text-[30px] text-[28px]'>Checkout Artworks</b>
                <span className='title-line'>-</span>
            </div>

            <div className="order-content sm:border md:mx-10 mx-6 rounded my-10 ">

                {/* order items */}
                <div className="order-items flex flex-col mx-2 items-center sm:gap-8 gap-30 sm:my-8 my-20">
                    {orderItems.map((item) => (
                        <div key={item.id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 py-5 px-2  md:w-200 sm:w-140 w-80'>
                            <img className='h-auto w-25 rounded-full border-3 border-[var(--blue-md)]' src={item.img} alt={item.title} />
                            <div className='text-center'>
                                <p className='sm:text-[24px] text-[20px] font-semibold my-3'> <span className='blue-md'>{item.title}</span> " - {item.artist}</p>
                                <p className='text-gray-600 text-[18px] font-medium'>Mediun: {item.medium}</p>
                                <p className='text-gray-600 text-[18px] font-medium'>Size: {item.size}</p>
                                <div className='flex items-center justify-center gap-5'>
                                    <p className='text-[22px] font-semibold mt-2'>Price: $<span className='blue-md' >{item.price}</span></p>
                                    <p className='font-semibold text-[20px] mt-1'>Quantity: <span className='text-2xl blue-md font-bold'>{item.quantity}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* order details */}
                <form onSubmit={(e) => handleOrderSubmit(e)} className=' place-content-center place-items-center'>

                    <h4 className='text-2xl font-semibold my-5'>Order Details</h4>

                    <div className="order-details sm:border md:w-200 w-90 rounded pt-8 px-8 mb-10 parent">

                        <div className="flex flex-col div1">
                            <label className='label-o'>Name :</label>
                            <input required className='input-o' type="text" />
                        </div>

                        <div className="flex flex-col div2">
                            <label className='label-o'>Phone Number :</label>
                            <input required className='input-o' type="number" />
                        </div>
                        <div className="flex flex-col div3">
                            <label className='label-o'>Address Line 1 :</label>
                            <textarea className='textarea-o' required></textarea>
                        </div>
                        <div className="flex flex-col div4">
                            <label className='label-o'>Address Line 2 : <span className='text-gray-500'>(optional)</span></label>
                            <textarea className='textarea-o'></textarea>
                        </div>
                        <div className="flex flex-col div5">
                            <label className='label-o'>Country :</label>
                            <input required className='input-o' type="text" />
                        </div>
                        <div className="flex flex-col div6">
                            <label className='label-o'>State :</label>
                            <input required className='input-o' type="text" />
                        </div>
                        <div className="flex flex-col div7">
                            <label className='label-o'>City :</label>
                            <input required className='input-o' type="text" />
                        </div>
                        <div className="flex flex-col div8">
                            <label className='label-o'>Pincode :</label>
                            <input required className='input-o' type="text" />
                        </div>
                        <div className="flex flex-col div9">
                            <label className='label-o'>Payment Method :</label>
                            <select className='select-o cursor-pointer' required>
                                <option  value="cashOnDelivery">Cash On Delivery</option>
                                <option  value="upi">UPI / QR Code</option>
                                <option  value="netbanking">Net Banking</option>
                                <option  value="card">Credit/Debit Card</option>
                            </select>
                        </div>
                    </div>

                    <div className='order-summary border-dashed border-3 rounded-[10px] border-[var(--blue-md)] flex flex-col  md:w-120 sm:p-10 p-5 gap-3 text-[22px] font-semibold mb-5'>

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

                    <div className="order-btns flex sm:flex-row flex-col sm:items-start items-center sm:gap-0 gap-8 justify-around w-full mt-10 mb-4">
                        <button onClick={() =>{ navigate('/artworks'); setActive('artworks')}} type='button' className="btn-1 cursor-pointer text-[22px] font-semibold w-50">Cancel</button>
                        <button type='submit' className="btn-2 flex text-[22px] font-semibold gap-2 w-55 text-center cursor-pointer">
                            <img src={order} alt="order icon" />
                            Place Order</button>
                    </div>

                </form>
            </div>



        </div>
    )
}

export default Order;