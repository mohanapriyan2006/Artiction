import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import art1 from '../../assets/art1.jpg';
import art2 from '../../assets/art2.jpg';
import art3 from '../../assets/art3.jpg';
import art4 from '../../assets/art4.jpg';
import art5 from '../../assets/art5.jpg';
import art6 from '../../assets/art6.jpg';
import art7 from '../../assets/art7.jpg';

const trendingArt = [
    {
        img: art1,
        name: "Sunset Overdrive",
        price: "$1200"
    },
    {
        img: art2,
        name: "Whispers of the Forest", price: "$850 "

    },
    {
        img: art3,
        name: "Urban Mirage", price: "$640"

    },
    {
        img: art4,
        name: "Golden Horizon", price: "$1500"

    },
    {
        img: art5,
        name: "Fragments of Time", price: "$720"

    },
    {
        img: art6,
        name: "Silent Reflections", price: "$980"
    }
    ,
    {
        img: art7,
        name: "Midnight Bloom", price: "$1100"

    }
];

const Trending = () => {
    

    return (
        <div className='trending-artworks mt-30'>

            <div className="divider mb-10">
                <span>-</span>
                <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'> Trending Artworks </b>
                <span>-</span>
            </div>

            <div className='mx-4 px-5 mb-10'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {trendingArt.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='text-center text-[20px] box-shadow p-5 mx-3 my-3'>
                                <img
                                    className='h-auto w-60 m-auto'
                                    src={item.img}
                                    alt={`Slide ${index + 1}`}
                                />
                                <p className='font-semibold line-clamp-1'>{item.name}</p>
                                <p className='font-medium'>- {item.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



        </div>
    )
}

export default Trending;
