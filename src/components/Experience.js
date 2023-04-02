import React from 'react'
import bootstrap from "../images/bootstrap-logo-shadow.png"
import html from "../images/html.png"
import css from "../images/css.png"
import tailwind from "../images/tailwind.png"
import next from "../images/nextjs.png"
import react from "../images/react.png"
import js from "../images/javascript.png"
import github from "../images/github.png"

const Experience = () => {
    const Logos=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
            
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:js,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:bootstrap,
            title:"Bootstrap",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-sky-400"

        },
        {
            id:6,
            src:react,
            title:"React",
            style:"shadow-blue-600"
            
        },
        {
            id:7,
            src:next,
            title:"Next JS",
            style:"shadow-white"
        },
        {
            id:8,
            src:github,
            title:"GitHub",
            style:"shadow-gray-500"
        }
    ]
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen" name="Experience">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>

        </div>
        <div className='grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {Logos.map(({id,src,title,style})=>(

            <div className={`py-2 rounded-md shadow-md hover:scale-105 duration-500 ${style}`} key={id}>
                <img src={src} alt="" className='w-20 mx-auto'  />
                <p className='mt-2'>{title}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
