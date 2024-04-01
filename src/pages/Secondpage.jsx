import React from "react";
import { useState, useEffect } from "react";
const Secondpage = () => {
  const images = [
    "/images/image11.png",
    "images/image22.jpg",
    "images/image12.jpg",
    "images/image33.jpg",
    "images/image21.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="w-full my-2 pt-8">
        <div className="max-w-[1240px]  mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div className="mx-auto sm:py-28 text-white">
            <h1 className="sm:text-5xl text-3xl py-4 font-bold sm:px-12 px-4 sm:text-start text-center ">
              Enjoy on your TV
            </h1>
            <p className="sm:text-2xl font-semibold sm:px-12 px-4 sm:text-start text-center pb-4 text-xl ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>

            {/* <p>relative w-full h-96 md:h-auto overflow-hidden</p> */}
          </div>
          <div className=" py-8 sm:py-16">
            <div className="relative   w-full h-64 sm:h-80 md:h-96 lg:h-128 xl:h-160 overflow-hidden">
              <div className="flex absolute top-0 left-0 w-full h-full">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`w-full h-full  scale-[0.7] object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-800"></div>
    </>
  );
};

export default Secondpage;
