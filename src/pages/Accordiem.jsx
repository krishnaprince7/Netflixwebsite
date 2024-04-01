import React, { useState } from "react";
import { RxPlus } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Accordiem = ({title,discription}) => {
  const [show,setshow] = useState(false)

  return (
    <>
      <div className="w-full my-2">
        <div className="max-w-[1040px] py-[1px] sm:px-0 px-5  mx-auto  text-white ">
          
          <div className="bg-[#2d2d2d] pt-6 pb-5 px-4" >
            <button className=" w-full flex justify-between " onClick={()=>{setshow(!show)}}>
                <span className="text-xl sm:text-2xl pb-2">{title}</span>
                <span className="text-xl">{show ? <RxCross2 className="size-6 sm:size-9 "/> : <RxPlus className="size-6 sm:size-9 "/>}</span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
            ${show? "grid-rows-[1fr] opacity-100" :"grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden sm:text-xl " >
                   {discription}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-2 w-full bg-gray-800"></div> */}
    </>
  );
};

export default Accordiem;
