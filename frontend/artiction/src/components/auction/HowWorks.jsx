import React from 'react';
import img from '../../assets/auction_main.png';
import loginI from '../../assets/login.png';
import handI from '../../assets/hand.png';
import trackI from '../../assets/track.png';
import winI from '../../assets/win.png';
import secureI from '../../assets/secure.png';

const HowWorks = () => {
    return (
        <div className='auction-howWork my-20'>
            <div className="divider">
                <span>-</span>
                <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>How It Works</b>
                <span>-</span>
            </div>

            <div className="howWork-content flex md:flex-row flex-col-reverse items-center">

                <div className='list-none flex flex-col justify-center p-5 gap-4 mx-2 pl-10'>
                    <li className='flex gap-2'>
                        <img className='h-auto sm:w-10 w-8' src={loginI} alt="icon1" />
                        <p className='text-[20px] font-semibold mt-1'><span className='blue-md'>Register or Log in</span> to participate in auctions.</p>
                    </li>
                    <li  className='flex gap-2'>
                        <img className=' h-15 sm:w-10 w-8'  src={handI} alt="icon2" />
                        <p className='text-[20px] font-semibold mt-1'><span className='blue-md'>Place your bid</span> — minimum increment applies..</p>
                    </li>
                    <li  className='flex gap-2'>
                        <img className='h-auto sm:w-10 w-8'  src={trackI} alt="icon3" />
                        <p className='text-[20px] font-semibold mt-1'><span className='blue-md'>Track the live</span> bidding status in real time.</p>
                    </li>
                    <li  className='flex gap-2'>
                        <img className='h-auto sm:w-10 w-8'  src={winI} alt="icon4" />
                        <p className='text-[20px] font-semibold mt-1'><span className='blue-md'>Highest bidder wins</span> when the timer ends.</p>
                    </li>
                    <li  className='flex gap-2'>
                        <img className='sm:h-10 h-8 sm:w-10 w-8'  src={secureI} alt="icon5" />
                        <p className='text-[20px] font-semibold mt-1'><span className='blue-md'>Secure your artwork</span> through easy online payment and shipping.</p>
                    </li>
                </div>

                <img className='w-150 ' src={img} alt="auction img" />
            </div>

        </div>
    )
}

export default HowWorks
