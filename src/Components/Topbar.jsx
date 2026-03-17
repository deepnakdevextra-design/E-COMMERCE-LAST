import React from 'react'
import closeIcon from "../assets/Frame.png"

export default function Topbar() {
  return (
   
    <div className="w-full bg-black text-white text-sm font-normal leading-none py-2 flex justify-center items-center relative">
      
      <p className='text-sm leading-none'>
        Sign up and get 20% off to your first order.
        <span className="font-medium underline ml-1 cursor-pointer">
          Sign Up Now
        </span>
      </p>
      <button className="absolute right-5">
       <img src={closeIcon} alt="close" className='w-4 h-4' /> 
      </button>
    </div>
   

  )
}

