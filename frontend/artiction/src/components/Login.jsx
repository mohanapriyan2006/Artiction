import React, { useContext } from 'react';
import { DataContext } from '../hooks/DataContext';

const Login = () => {

  const { navigate, setActive, setIsLogined, setRole } = useContext(DataContext);

  return (

    <div className='login-page min-h-screen grid place-items-center p-4 -mt-10 bg-gray-50'>
      <div className="w-full max-w-md">
        <div className="logo bg-white text-center mb-8">
          <h1 className='text-[var(--blue-dk)]'>Artiction</h1>
        </div>

        <div className='border-2 rounded-[10px] border-[var(--blue-sm)] shadow-lg glowing py-8 px-6 sm:px-10 text-center bg-white w-full'>
          <h3 className='text-2xl font-semibold text-[var(--blue-md)] mb-6'>Sign in</h3>
          <form className='flex flex-col gap-6 w-full' onSubmit={(e) => { e.preventDefault(); navigate('/'); setActive("home"); setIsLogined(true) }}>
            <input
              className='border-dashed border-2 rounded p-3 w-full focus:outline-none focus:border-[var(--blue-md)] text-center'
              placeholder='Enter username'
              type="text"
              name='username'
              required
              autoFocus
            />
            <input
              className='border-dashed border-2 rounded p-3 w-full focus:outline-none focus:border-[var(--blue-md)] text-center'
              placeholder='Enter password'
              type="password"
              name="password"
              required
            />
            <div>
              <label className='text-[20px] font-medium'>Role :</label>
              <input onClick={() => setRole('Artist')} className='ml-5' type="radio" name="role" required />
              <label> Artist</label>
              <input onClick={() => setRole('Collector')} className='ml-3' type="radio" name="role" />
              <label> Collector</label>
            </div>
            <button
              type="submit"
              className='bg-[var(--blue-dk)] text-[20px] text-white py-3 px-6 rounded hover:bg-[var(--blue-md)] transition-colors w-full cursor-pointer font-semibold'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;