import React from 'react';
import art1 from '../../assets/art1.jpg';
import art2 from '../../assets/art2.jpg';
import art3 from '../../assets/art3.jpg';
import art4 from '../../assets/art4.jpg';
import art5 from '../../assets/art5.jpg';
import { useNavigate } from 'react-router';

const liveAuctions = [
  {
    id: 1,
    title: "Midnight Bloom",
    artist: "Aarya Mehta",
    medium: "Oil on Canvas",
    size: "36 x 24 inches",
    currentBid: 5000,
    timeLeft: "01:12:48",
    img: art1,
  },
  {
    id: 2,
    title: "Ocean's Whisper",
    artist: "Liam Chen",
    medium: "Acrylic on Wood",
    size: "24 x 18 inches",
    currentBid: 3200,
    timeLeft: "02:45:15",
    img: art2,
  }
];

const endedAuctions = [
  {
    id: 101,
    img: art3,
    title: "Starry Solitude",
    artist: "Elena Petrova",
    medium: "Watercolor on Paper",
    size: "20 x 16 inches",
    finalBid: 3800,
    sold: true,
    endTime: "2023-04-15 14:30:00",

  },
  {
    id: 102,
    img: art4,
    title: "Rustic Memories",
    artist: "Carlos Mendez",
    medium: "Charcoal on Canvas",
    size: "30 x 22 inches",
    finalBid: 1500,
    sold: false,
    endTime: "2023-04-10 09:15:00",
  },
  {
    id: 103,
    img: art5,
    title: "Azure Depths",
    artist: "Nina Yamamoto",
    medium: "Oil on Canvas",
    size: "40 x 30 inches",
    finalBid: 9200,
    sold: true,
    endTime: "2023-04-18 21:00:00",
  }
];

const Explore = () => {
  
  const navigate = useNavigate();

  return (
    <div id='exploreAuction' className='auction-explore mb-10'>
      <div className="divider">
        <span>-</span>
        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>Explore Auctions</b>
        <span>-</span>
      </div>

      {/* Live Auctions – Bid Now! */}
      <div className="title flex flex-col items-center mt-5">
        <b className='font2 font-bold sm:text-[30px] text-[22px]'><span className='text-[18px]'>🔴</span> Live Auctions – Bid Now!</b>
        <span className='title-line'>-</span>
      </div>

      <p className='text-center text-gray-600 text-[18px] my-5 '>Happening Now
        Grab Your Masterpiece Before the Hammer Falls!</p>

      <div className="live-auctions flex flex-col mx-2 items-center sm:gap-8 gap-30 sm:my-8 my-20">
        {
          liveAuctions.map((item, id) => (
            <div key={id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 py-5 px-2  md:w-200 sm:w-160 w-80  glowing'>

              <img className='h-auto w-50' src={item.img} alt={item.title} />

              <div className='text-center'>

                <p className='sm:text-[24px] text-[18px] font-semibold my-3 '>" <span className='blue-md'>{item.title}</span> "- {item.artist}</p>
                <p className='text-gray-600 text-[18px] font-medium'>Mediun: {item.medium}</p>
                <p className='text-gray-600 text-[18px] font-medium'>Size: {item.size}</p>
                <p className='font-[600] my-2'>Current bid: $<span className='blue-md' >{item.currentBid}</span></p>

                <div className='flex gap-2 items-center justify-center mb-5'>
                  <p>Time left: </p>
                  <div className='bg-[var(--blue-sm)] text-white py-3 px-8 rounded'>
                    {item.timeLeft}
                  </div>
                </div>

                <div className='mt-8 mx-8 flex flex-col sm:flex-row sm:gap-0 gap-4 items-center'>
                  <input placeholder='$ Enter a amount' className='border-[var(--blue-md)] border-2 rounded sm:mr-5 w-50 mr-2 sm:mb-3 mb-0 h-8 text-center' type="number" name="amount" />
                  <button className="btn-2 cursor-pointer">Place a Bid</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>


      {/* Past Auctions – Recently Closed */}
      <div className="title flex flex-col items-center mt-30">
        <b className='font2 font-bold sm:text-[30px] text-[22px]'>Past Auctions – Recently Closed</b>
        <span className='title-line'>-</span>
      </div>

      <p className='text-center text-gray-600 text-[18px] my-5 '>Take a look at some of the artworks
        that found their forever homes.</p>

      <div className="past-auctions flex flex-col mx-2 items-center  sm:gap-8 gap-30 sm:my-8 my-20">
        {
          endedAuctions.map((item, id) => (
            <div key={id} className='flex sm:flex-row flex-col justify-center items-center box-shadow sm:gap-8 gap-0 mx-5 sm:my-0 -my-10 py-5 px-2  md:w-200 sm:w-160 '>

              <img className='h-auto w-50' src={item.img} alt={item.title} />

              <div className='text-center'>

                <p className='sm:text-[24px] text-[20px] font-semibold my-3'>" <span className='blue-md'>{item.title}</span> "- {item.artist}</p>
                <p className='text-gray-600 text-[18px] font-medium'>Mediun: {item.medium}</p>
                <p className='text-gray-600 text-[18px] font-medium'>Size{item.size}</p>
                <p className=' text-[20px] font-medium'>Auction Ended : {item.endTime}</p>
                <p className=" text-[20px] font-medium ">Status : <span className={`${item.sold ? 'text-green-800' : 'text-red-800'}`}>{item.sold ? 'Sold' : 'Not Sold'}</span></p>
                <p className='text-[22px] font-semibold mt-2 mb-4'>Final bid: $<span className='blue-md' >{item.finalBid}</span></p>

                <button onClick={() => navigate('/artworks')} className="btn-2 cursor-pointer">View Artwork</button>

              </div>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Explore