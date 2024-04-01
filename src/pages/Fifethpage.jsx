import React from "react";

const Fifethpage = () => {
  return (
    <>
      <div className="w-full my-2 pt-6">
        <div className="max-w-[1240px] sm:h-[70vh]  mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div className="text-white mx-auto order-2 sm:order-1 ">
            <img
              className="scale-[0.8] mb-14 "
              src="/images/childreen.png "
              alt=""
            />
          </div>
          <div className="text-white sm:mx-4 mx-auto   sm:py-28 sm:order-1 order-1">
            <h1 className="sm:text-5xl text-3xl py-4 font-bold sm:px-9 px-4 sm:text-start text-center ">
              Create profiles for kids
            </h1>
            <p className="sm:text-2xl font-semibold sm:px-9 px-4 sm:text-start text-center pb-4 text-xl ">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-800"></div>
    </>
  );
};

export default Fifethpage;
