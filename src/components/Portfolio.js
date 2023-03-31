import React from "react";
import movieApp from "../images/MOVIE APP.png";
import spotifyApp from "../images/spotify.png";
import teslaApp from "../images/tesla .png";
import newsApp from "../images/newsApp.png";
import txtUtils from "../images/txtUtils.png"
import noteBook from "../images/noteBook.png"

const Portfolio = () => {
    const images=[
        {
            id:1,
            img:movieApp
        },
        {
            id:2,
            img:newsApp
        },
        {
            id:2,
            img:noteBook
        },
        {
            id:2,
            img:txtUtils
        },
        {
            id:3,
            img:teslaApp
        },
        {
            id:4,
            img:spotifyApp
        },
    ]
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl border-gray-500 inline border-b-4 ">Portfolio</p>
          <p className="py-4 ">Check out some of my recent projects here</p>
        </div>
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" > 
        {images.map(({id,img})=>(
          <div className="shadow-md shadow-gray-600 rounded-md" key={id}>
                  <img src={img} alt=""  className="w-full h-[150px] rounded-md hover:scale-105 duration-200" />
                  <div className="flex items-center justify-center gap-6">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                  </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
