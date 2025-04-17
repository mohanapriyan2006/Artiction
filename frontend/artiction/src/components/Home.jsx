import React from 'react'
import Header from './home/Header';
import WhyUs from './home/WhyUs';
import Featured from './home/Featured';
import Community from './home/Community';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home m-auto'>
        <Header/>
        <WhyUs/>
        {/* <Featured/>
        <Community/> */}
    </div>
  )
}

export default Home;