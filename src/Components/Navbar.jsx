import React from 'react'
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-white flex justify-center">

      {/* Container */}
      <div className="w-full max-w-7xl flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="text-[32px] font-bold">
          SHOP.CO
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6 text-gray-700">
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">On Sale</p>
          <p className="cursor-pointer">New Arrivals</p>
          <p className="cursor-pointer">Brands</p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-90">
          <input
            type=""
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Icons */}
          <div className="flex items-center gap-6 ">

            {/* cart icon */}
            <ShoppingCart size={24} className=' hover:bg-gray-300 cursor-pointer'/>

            {/* user cart */}
            <User size={24} className='hover:bg-gray-300 cursor-pointer'/>


          </div>


        
      </div>

    </div>
  );
}
