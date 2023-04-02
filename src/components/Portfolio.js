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
            img:movieApp,
            href:"https://usaidmovieapp.netlify.app/",
            code:"https://github.com/Usaid12/Movie-App.git"

        },
        // {
        //     id:2,
        //     img:newsApp,
        //     href:""
        // },
        // {
        //     id:2,
        //     img:noteBook,
        //     href:"https://rainbow-cupcake-4bd153.netlify.app/"
        // },
        
        {
            id:3,
            img:teslaApp,
            href:"https://teslaclone-1.netlify.app/",
            code:"https://github.com/Usaid12/Tesla-Clone.git"
        },
        {
            id:4,
            img:spotifyApp,
            href:"https://usaidsplayer.netlify.app/",
            code:"https://github.com/Usaid12/Modern-Music-Player-.git"
        },
    ]
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl border-gray-500 inline border-b-4 p-2">Portfolio</p>
          <p className="py-6">Check out some of my recent projects here</p>
        </div>
       
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" > 
        {images.map(({id,img,href,code})=>(
          <div className="shadow-md shadow-gray-600 rounded-md" key={id}>
                  <img src={img} alt=""  className="w-full h-[180px] rounded-md hover:scale-105 duration-200" />
                  <div className="flex items-center justify-center gap-6">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={href} target="_blank" rel="noreferrer">Demo</a></button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={code} target="_blank" rel="noreferrer">Code</a></button>
                  </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
