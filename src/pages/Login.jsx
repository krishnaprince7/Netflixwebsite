import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Login = () => {
  return (
    <>

    <div>
         <div className='w-full h-screen'>
    <img className='w-full h-full absolute  sm:block object-cover ' src="/images/netflix.jpg" alt="/" />
    <div className='absolute bg-black/60 left-0 top-0 w-full h-screen'></div>
    <div className='absolute w-full px-4 sm:pt-4 py-24 sm:py-0 z-50'>
    <div className='max-w-[450px] h-[600px] bg-black/75 mx-auto text-white'>
    <div className='max-w-[320px] mx-auto py-16'>
    <h1 className='text-3xl font-bold'>Sign In</h1>
    <form className='flex flex-col w-full py-4' >
      <input className='p-3 my-2 bg-gray-700 rounded ' type="email"  placeholder='Email'/>
      <input className='p-3 my-2 bg-gray-700 rounded ' type="password"  placeholder='Password'/>
      <button className='bg-red-600 py-3 my-6 font-bold'>Sign In</button>
      <div className='flex justify-between items-center text-sm text-gray-600'>
      <p> <input className='mr-2' type="checkbox" />Remember me</p>
<p>Need Help?</p>

      </div>
<p className='py-8'> <span className='text-gray-600'>New To Netflix?  </span> <Link to="/sinup">Sign Up</Link></p>

    </form>

    </div>


    </div>

    </div>

    </div>
    </div>
    <div className="mt-20">

<Footer/>
</div>
    </>
  )
}

export default Login