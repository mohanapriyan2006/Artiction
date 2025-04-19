import React from 'react';
import error from '../assets/error.png';
import { useNavigate } from 'react-router';

const Missing = () => {
    
    const navigate = useNavigate();

  return (
    <div className="missing place-content-center place-items-center mt-10">
        <img className='h-auto md:w-150 sm:w-120 w-100' src={error} alt='Not found image'/>
        <h3 className='md:text-4xl sm:text-3xl text-2xl font-semibold'><b style={{color: 'red'}}>404</b> Page not found !</h3>
        <h5 className='md:text-4xl sm:text-3xl text-2xl font-semibold mt-8'> Go to <button onClick={() => navigate('/')} className="btn-2 cursor-pointer">Home</button> </h5>
    </div>
  )
}

export default Missing;
