import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div className='   flex justify-between p-4 z-[100] absolute w-full'>
<Link to="/">
    <h1 className='text-red-600 text-2xl  sm:text-4xl font-bold cursor-pointer'>NETFLIX</h1>

</Link>

    <div className=''>
          <Link to="/login">
        <button className='text-white  sm:text-xl text-sm pr-4 cursor-pointer'>Sign In</button>

          </Link>
          <Link to="/sinup">
        <button className='text-white sm:text-xl text-sm bg-red-600 px-4 py-1 sm:px-6 sm:py-2 rounded cursor-pointer'>Sign Up</button>

          </Link>
    </div>

    </div>
  )
}

export default Navebar