import React from 'react'
import Header from './auction/Header';
import HowWorks from './auction/HowWorks';
import Explore from './auction/Explore';
import '../styles/Auction.css';

const Auction = () => {
    return (
        <div className='auction-page'>
            <Header />
            <HowWorks/>
            <Explore/>
        </div>
    )
}

export default Auction;