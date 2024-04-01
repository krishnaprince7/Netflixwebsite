import React from "react";

const Fourthpage = () => {
  return (
    <>
      <div className="w-full my-2 pb-6">
        <div className="max-w-[1240px] sm:h-[70vh]  mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div className="mx-auto 8 py-8 sm:py-28 text-white">
          <h1 className="sm:text-5xl text-3xl py-4 font-bold sm:px-12 px-4 sm:text-start text-center ">
          Watch everywhere
            </h1>
            <p className="sm:text-2xl font-semibold sm:px-12 px-4 sm:text-start text-center pb-4 text-xl ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="mx-auto  text-white">
            <div className="relative">
            <img src="/images/device-pile-in.png" alt="" />
            <div className="absolute top-0 sm:top-3 left-2 sm:left-16 -z-10 scale-[0.6] sm:scale-75" >
                <video  src="/images/video-devices-in.mp4" autoPlay loop > </video>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-800"></div>
    </>
  );
};

export default Fourthpage;
