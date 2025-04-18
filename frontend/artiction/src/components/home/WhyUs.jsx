import React from 'react'
import img1 from '../../assets/whyus1.png';
import img2 from '../../assets/whyus2.png';
import img3 from '../../assets/whyus3.png';
import man from '../../assets/man.jpg';
import girl from '../../assets/girl.jpg';



const whysUs = [
  {
    img: img1,
    title: "Secure Transactions",
    content: "We ensure safe and seamless payments for all buyers and sellers."
  },
  {
    img: img2,
    title: "Verified Artists & Collectors",
    content: "Only trusted and authenticated users can list and bid on artworks."
  },
  {
    img: img3,
    title: "Authenticity Guarantee",
    content: " Every piece is verified for originality, giving you confidence in your purchase."
  },
];

const testimonials = [
  {
    img: man,
    title: "An Unmatched Art Bidding Experience!",
    content: "This platform transformed the way I collect art. The live auctions are thrilling, and the virtual gallery is stunning!",
    by: "- Michael R., Art Collector"
  },
  {
    img: girl,
    title: "A Dream Come True for Artists!",
    content: "As an emerging artist, showcasing my work here connected me with global collectors. My paintings now have a worldwide audience!",
    by: "- Sophia L., Digital Artist"
  },
]

const WhyUs = () => {
  return (
    <div className='home-whyus mt-20'>
      <div className="divider">
        <span>-</span>
        <b className='font2 font-bold text-[28px] sm:text-[32px] -mt-5'>Why choose us ?</b>
        <span>-</span>
      </div>

      <div className="whyus-content flex justify-around gap-5 mx-6 my-10 flex-col sm:flex-row">
        {
          whysUs.map((item, id) => (
            <div key={id} className='whyus-content-div text-center box-shadow pb-5 sm:flex-1/3'>
              <img className='w-60 m-auto' src={item.img} alt={`${item.title} preview`} />
              <h4 className='font-bold text-[22px] mx-2'>{item.title}</h4>
              <p className='text-gray-600 mx-5'>{item.content}</p>
            </div>
          ))
        }
      </div>
      
      {/* Testimonials */}
      <div className="title flex flex-col items-center">
        <b className='font2 font-bold text-[30px]'>Testimonials</b>
        <span className='title-line'>-</span>
      </div>

      <div className="testimonial-div flex flex-col items-center">
        {
          testimonials.map((item, id) => (
            <div key={id} className="testimonial-content box-shadow flex text-center p-10 m-10 md:w-180 w-fit sm:flex-row flex-col">
              <img className='w-40 m-auto rounded-full' src={item.img} alt={`${item.title} preview`} />
              <div>
                <h4 className='font-bold text-[22px] mx-3 pt-3'>{item.title}</h4>
                <p className='text-gray-600 mx-6'>{item.content}</p>
                <p className='text-end'>{item.by}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default WhyUs