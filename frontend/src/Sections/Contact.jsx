import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center px-7 bg-[rgb(1,16,47)]'>
      <div className='font-bold py-7 text-5xl flex gap-4 capitalize '>
        <span className='text-white'>Contact</span>
        <span className='text-[rgb(236,190,61)]'>Me</span>
      </div>
      <form action="" className='justify-end grid grid-cols-2 pt-7 gap-7'>
        <input type="text" placeholder='Enter Your Name' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
        <input type="text" placeholder='Enter Your Name' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
        <input type="text" placeholder='Enter Your Name' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
        <input type="text" placeholder='Enter Your Name' className='outline-none border-none p-5 ml-4 text-lg rounded-md bg-slate-700'/>
      </form>
    </div>
  )
}

export default Contact