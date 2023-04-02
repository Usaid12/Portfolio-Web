import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 h-screen w-full p-4 text-white ' name="Contact">
     <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className="text-4xl border-gray-500 font-semibold inline border-b-4">Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/78f3cafa-b0b2-4989-af89-282f1eb1d37a" className='flex flex-col w-full md:w-1/2 ' method='POST'>
                    <input type="text" name='name' placeholder='John Doe' className='bg-transparent p-2 border-2 placeholder:opacity-70 placeholder:text-sm text-white focus:outline-none rounded-md' required={true} />
                    <input type="text" name='email' placeholder='JohnDoe@gmail.com' className='bg-transparent p-2 border-2 placeholder:opacity-70 placeholder:text-base text-white focus:outline-none rounded-md my-4' required={true} />
                    <textarea name=""  rows="10" className='bg-transparent p-2 border-2 placeholder:opacity-70 placeholder:text-sm text-white focus:outline-none rounded-md' placeholder='Write your message here' required={true}></textarea>
                    <button className='rounded-md bg-gradient-to-r from-green-600 to-green-900 text-white px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300' >Let's talk</button>
                </form>
            </div>

            </div> 
    </div>
  )
}

export default Contact
