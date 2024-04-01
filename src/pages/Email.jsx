import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
const Email = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      // If email is valid, redirect to next component
      navigate('/home');
    }
    else if(email === ""){
      alert("Enter your email")

    }
    else {
      // If email is invalid, display error message
      alert('Enter correct email!');

    }
  };
 
 



  return (
    <>
      <div className="w-full ">
        <div className="max-w-[600px] mx-auto py-8 sm:py-12  px-4">
          <p className="sm:text-xl font-semibold text-center text-white pb-4 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2   sm:mx-0 mx-7">
            <div>
              <input
                className="bg-gray-700/60 mx-auto  text-white font-semibold   w-full px-4 py-4 rounded flex"
                type="email"
                placeholder="Email address"
                value={email}
        onChange={(e) => setEmail(e.target.value)}
               
              />
            </div>
            <div>
             
                <button  onClick={validateEmail} className="mx-auto sm:text-start px-4 text-white bg-red-700 py-4 rounded sm:w-[220px] text-xl sm:my-0 my-4 font-bold flex">
                  Get Started <FaChevronRight className="my-1" />
                </button>
           
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-800"></div>
    </>
  );
};

export default Email;
