import React, { useContext, useState } from 'react';
import { DataContext } from '../hooks/DataContext';

const Register = () => {
  const { navigate, setActive, registerUser, setRole } = useContext(DataContext);
  const [form, setForm] = useState({ username: '', password: '', confirm: '', role: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    const res = await registerUser({ username: form.username, password: form.password, role: form.role });
    if (!res.ok) {
      setError(res.message || 'Registration failed');
      return;
    }
    setSuccess('Registered! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
      setActive('login');
    }, 1200);
  }

  return (
    <div className='min-h-screen grid place-items-center p-4 -mt-10 bg-gray-50'>
      <div className="w-full max-w-md">
        <div className="logo bg-white text-center mb-8">
          <h1 className='text-[var(--blue-dk)]'>Artiction</h1>
        </div>
        <div className='border-2 rounded-[10px] border-[var(--blue-sm)] shadow-lg glowing py-8 px-6 sm:px-10 text-center bg-white w-full'>
          <h3 className='text-2xl font-semibold text-[var(--blue-md)] mb-6'>Register</h3>
          <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
            <input
              className='border-dashed border-2 rounded p-3 w-full focus:outline-none focus:border-[var(--blue-md)] text-center'
              placeholder='Choose username'
              type="text"
              name='username'
              value={form.username}
              onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
              required
              autoFocus
            />
            <input
              className='border-dashed border-2 rounded p-3 w-full focus:outline-none focus:border-[var(--blue-md)] text-center'
              placeholder='Create password (min 6)'
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
              required
            />
            <input
              className='border-dashed border-2 rounded p-3 w-full focus:outline-none focus:border-[var(--blue-md)] text-center'
              placeholder='Confirm password'
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={(e) => setForm(f => ({ ...f, confirm: e.target.value }))}
              required
            />
            <div className='flex flex-col items-center'>
              <label className='text-[20px] font-medium mb-2'>Role :</label>
              <div className='flex gap-6'>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name="role"
                    value="Artist"
                    checked={form.role === 'Artist'}
                    onChange={(e) => { setForm(f => ({ ...f, role: e.target.value })); setRole('Artist'); }}
                    required
                  /> Artist
                </label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name="role"
                    value="Collector"
                    checked={form.role === 'Collector'}
                    onChange={(e) => { setForm(f => ({ ...f, role: e.target.value })); setRole('Collector'); }}
                  /> Collector
                </label>
              </div>
            </div>
            {error && <p className='text-red-600 text-sm font-semibold'>{error}</p>}
            {success && <p className='text-green-600 text-sm font-semibold'>{success}</p>}
            <button
              type="submit"
              className='bg-[var(--blue-dk)] text-[20px] text-white py-3 px-6 rounded hover:bg-[var(--blue-md)] transition-colors w-full cursor-pointer font-semibold'
            >
              Register
            </button>
            <button
              type='button'
              onClick={() => navigate('/login')}
              className='text-[14px] underline text-[var(--blue-md)]'
            >Have an account? Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;