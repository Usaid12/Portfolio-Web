import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiOutlineMail,AiOutlineInstagram} from 'react-icons/ai'



const SocialLinks = () => {
    const links = [
        {
          id: 1,
          child:(
            <>
            LinkedIn<AiFillLinkedin size={30}/>
            </>
          ),
          href:"https://www.linkedin.com/in/usaid-asif/",
          
          style:"rounded-tr-md"
        },
        {
          id: 2,
          child:(
            <>
            Github<AiFillGithub size={30}/>
            </>
            
          ),
          href:"https://github.com/Usaid12"

        },
        {
          id: 3,
          child:(
            <>
            Instagram<AiOutlineInstagram size={30}/>
            </>
            
          ),
          href:"https://www.instagram.com/usaidasiff_/"

        },
        {
          id: 4,
          child:(
            <>
            Mail<AiOutlineMail size={30}/>
            </>
          ),
          href:"mailto:usaida863@gmail.com",
          style:"rounded-br-md"

        },
        
    ]
  return (
    <div  className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style})=>(
                 // eslint-disable-next-line no-useless-concat
                 <li  key={id} className={'flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:rounded-md bg-gray-500 hover:ml-[-10px]' + "" + style}><a href={href} target="_blank" className='flex justify-between items-center w-full text-white' rel="noreferrer" >{child}</a></li>

            ))}
           
           
        </ul>
      
    </div>
  )
}

export default SocialLinks
