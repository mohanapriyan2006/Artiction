import React from 'react'
import Header from './artworks/Header';
import Trending from './artworks/Trending';
import ExploreArt from './artworks/ExploreArt';
import '../styles/Artworks.css';

const Artworks = () => {
  return (
    <div className='artwork-page'>
        <Header/>
        <Trending/>
        <ExploreArt/>
    </div>
  )
}

export default Artworks;