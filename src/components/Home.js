import React from "react";
import myImage from "../images/dp.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          
          <h2 className="text-4xl sm:text-7xl pb-4 font-semibold opacity-80 text-white ">
            I'm a Front-End Web Developer
          </h2>
          <p className="text-gray-500 max-w-md py-4">
            I am proficient in HTML, CSS, and JavaScript and have experience
            working with various front-end frameworks such as React or Angular.
            I understand the importance of creating responsive and user-friendly
            interfaces and enjoy finding innovative solutions to design
            challenges.
          </p>
          <div className="flex my-4 gap-8">
            <Link to="Portfolio" smooth duration={500}>
            
            <button className="group px-4 py-2 flex items-center w-fit my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-500 font-semibold">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={20} />
              </span>
            </button>
            </Link>
            <button className=" group px-4 py-2 flex items-center w-fit my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-500 font-semibold ">
                <a href="/Resume.pdf" download={true}>Download Resume&nbsp;</a>
              
              <span className="animate-bounce duration-200"><BiDownload /></span>
              
            </button>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="My Display"
            className="rounded-3xl shadow-xl mx-auto w-2/3 md:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
