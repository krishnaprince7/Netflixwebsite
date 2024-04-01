import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';
import Fourthpage from './Fourthpage';
import Fifethpage from './Fifethpage';
import Accordiem from './Accordiem';
import Acordiamclone from './Acordiamclone';
import Heading from './Heading';
import Email from './Email';
import Footer from './Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Firstpage = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      // If email is valid, redirect to next component
      navigate('/home');
    }
    else if(email === ""){
      alert("Enter your email!")
      
    }
    else {
      // If email is invalid, display error message
      alert('Enter correct email!');
    }
  };
 
  return (
    <>

    <div className='w-full sm:h-screen h-[95vh] '>
    <img className='w-full sm:h-screen h-[95vh] object-cover' src="/images/netflix.jpg" alt="" />
    <div className='absolute top-0 left-0 bg-black/60  w-full h-screen '></div>
    <div className='text-white absolute top-0 flex flex-col h-screen w-full justify-center items-center text-center '>
    <div>
      <h1 className='sm:text-5xl text-3xl py-4 font-bold px-8'>Unlimited movies, TV shows and more</h1>
      <p className='sm:text-2xl font-semibold px-4 pb-4 text-xl'>Watch anywhere. Cancel anytime.</p>
      <p className='sm:text-xl font-semibold pb-4 px-14'>Ready to watch? Enter your email to create or restart your membership.</p>


    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:w-[700px]  w-[300px]'>
      <input className='bg-gray-700/60 font-semibold  text-gray-200w-full px-4 py-4 rounded flex' type="email"  placeholder='Email address' 
         value={email}
        onChange={(e) => setEmail(e.target.value)}
        
       />
      

      <button onClick={validateEmail}  className=' sm:text-start px-4 bg-red-700 py-4 sm:ml-5 mx-auto rounded sm:w-[220px] text-xl sm:my-0 my-4 font-bold flex'>Get Started <FaChevronRight className='my-1'/></button>

     
    </div>

    </div>
    <div className='h-2 w-full bg-gray-800'>

    </div>

    </div>
    <Secondpage/>
    <Thirdpage/>  
    <Fourthpage/>
    <Fifethpage/>
    <Heading/>
    <Acordiamclone/>
    <Email/>
    <Footer/>
  
    </>
  )
}

export default Firstpage