import React, { useContext } from 'react';
import error from '../assets/error.png';
import { useNavigate } from 'react-router';
import { DataContext } from '../hooks/DataContext';

const Missing = () => {

  const { navigate, setActive } = useContext(DataContext);

  return (
    <div className="missing place-content-center place-items-center mt-10">
      <h3 className='sm:text-3xl text-2xl font-semibold'><b style={{ color: 'red' }}>404</b> Page not found !</h3>
      <h5 className='sm:text-3xl text-2xl font-semibold mt-8'> Go to <button onClick={() => { navigate('/'); setActive('home') }} className="btn-2 cursor-pointer">Home</button> </h5>
      <img className='h-auto sm:w-120 w-100' src={error} alt='Not found image' />
    </div>
  )
}

export default Missing;
