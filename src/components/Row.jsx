import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

import React, { useEffect, useState } from "react";

const Row = ({ title, fetchurl,rowid }) => {
  const [movies, setmovies] = useState([]);

  const [like, setlike] = useState();

  useEffect(() => {
    axios.get(fetchurl).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchurl]);

 
  
  function rightleft(){
    var slider = document.getElementById("slider" + rowid);
    slider.scrollLeft = slider.scrollLeft -500;

  }
  function rightright(){
    var slider = document.getElementById("slider" + rowid);
    slider.scrollLeft = slider.scrollLeft + 500;

  }
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft size={40} onClick={rightleft} className="bg-white hidden left-0 rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-10 group-hover:block" />
        <div id={"slider" + rowid } className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative">
          {movies.map((item, id) => (
            <div className="w-[160px]  sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white">
                <p className="flex justify-center items-center text-center h-full w-full text-sm md:text-sm font-bold whitespace-normal">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute left-4 top-0 text-gray-300" />
                  ) : (
                    <FaRegHeart className="absolute left-4 top-0 text-gray-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
          <MdChevronRight size={40} onClick={rightright} className="bg-white right-0 hidden rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-10 group-hover:block"/>

      </div>
    </div>
  );
};

export default Row;
