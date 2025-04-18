import React from 'react';
import subImg from '../../assets/subscribe.jpg';

const Community = () => {
  return (
    <div className='home-community mb-10'>
      <div className="divider">
        <span>-</span>
        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'> Join the Community </b>
        <span>-</span>
      </div>

      {/* Be Part of the Art Revolution! */}
      <div className="title flex flex-col items-center mt-5">
        <b className='font2 font-bold sm:text-[30px] text-[22px]  text-center'>Be Part of the Art Revolution!</b>
        <span className='title-line'>-</span>
      </div>

      <div className="Art-User flex sm:flex-row flex-col justify-around mx-10 mt-10 items-center">

        <div className="text-center md:p-10  p-3">
          <h3 className='text-[24px] font-semibold'>For Collectors & Enthusiasts</h3>
          <p className='text-[20px] text-gray-600 mt-4'>Sign up today to explore exclusive masterpieces, participate in live auctions, and own breathtaking artworks from world-renowned and emerging artists.</p>
          <button className='oval-btn mt-5' role='button' type="button"><span>Join</span></button>
        </div>

        <span className='cross-divider'>-</span>

        <div className="text-center  md:p-10  p-3">
          <h3 className='text-[24px] font-semibold'> For Artists</h3>
          <p className='text-[20px] text-gray-600 mt-4'>Showcase your talent to a global audience, auction your artwork, and connect with passionate collectors who appreciate your creativity.</p>
          <button className='oval-btn mt-5' role='button' type="button"><span>Join</span></button>
        </div>

      </div>

      {/* Stay Connected with the World of Art */}
      <div className="title flex flex-col items-center mt-10">
        <b className='font2 font-bold sm:text-[30px] text-[22px] text-center'>Stay Connected with the World of Art</b>
        <span className='title-line'>-</span>
      </div>

      <div className="subscribe-div flex md:flex-row flex-col-reverse  justify-around md:px-10 px-2 py-5 mx-15">

        <div className='text-center flex flex-col justify-center md:px-20 px-1'>
          <h2 className='text-[22px] font-semibold mb-2'>Newsletter Subscription</h2>
          <p className='text-[18px] text-gray-600 sm:mx-0 mx-5 mb-5'>Subscribe to receive the latest updates on exclusive auctions, featured artists, and upcoming exhibitions.</p>
          <form className='subscribe-form flex md:flex-row flex-col items-center gap-4 justify-center'>
            <label htmlFor="email" className='absolute -left-99999'>Enter email</label>
            <input className=' sm:w-[220px] w-[180px]' placeholder='Enter email' type="email" name="email" required />
            <button  type='submit'>Subscribe</button>
          </form>
        </div>

        <div>
          <img className='h-auto md:w-150 w-80 m-auto' src={subImg} alt="img"  />
        </div>

      </div>

    </div>
  )
}

export default Community