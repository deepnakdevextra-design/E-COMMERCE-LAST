import React,{useEffect,useState}from 'react';
import pic5 from "../assets/page2/Frame1.png"
import pic6 from "../assets/page2/Frame2.png"
import pic7 from "../assets/page2/Frame3.png" 
import pic8 from "../assets/page2/Frame4.png"
import { Star } from 'lucide-react'

export default function Pdt2() {

 const products=[
     {
     id:5,
         pic:pic5,
       name:"VERTICAL STRIPED SHIRT",
       star:5,
       price:212,
       oldPrice:232,
       discount:"-20%"
     },
     {
         id:6,
        pic:pic6,
         name:"COURAGE GRAPHIC T-SHIRT",
         star:4,
         price:145,

     
     },
     {
         id:7,
            pic:pic7,
         name:"LOOSE FIT BERMUDA SHORTS",
         star:3,
           price:80,
       
     },
     {
         id:8,
          pic:pic8,
         name:"FADED SKINNY JEANS",
         star:5,
         price:210,
         
        
     }
 ]
 
   return (
   <div className='h-auto'>
     <div >
         <h2  className='text-5xl  text-center font-extrabold my-10 '>TOP SELLING</h2>
     </div>
    <div className='grid grid-cols-4 gap-5 p-10'>
     {
      products.map((product)=>(
         <div key={product.id} className='p-4 rounded-lg' >
             <img src={product.pic} alt={product.name} className='w-full object-cover'/>
             <h2 className='font-semibold mt-2 '>{product.name}</h2>
 
 {/* star rating */}
            <div className="flex text-yellow-400">
       {[...Array(product.star)].map((_, i) => (
         <Star key={i} size={18} fill="currentColor" />
       ))}
     </div>
 
 {/* price */}
 <div className='flex items-center gap-3'>
   {/* product price  */}
     <span className='text-3xl font-bold border-blue-500 px-2 py-1'>${product.price}</span>
 
     {/* show olde price if only exist */}
   {
     product.oldPrice && (
         <span className='text-gray-400 text-2xl line-through'>${product.oldPrice}</span>
     )
   }
 
     {/* show discount only if exist */}
     {
         product.discount && (
             <span className='bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium'>{product.discount}
             </span>
         )
     }
 </div>
 
             
         </div>
      ))
     }
    
 
    </div>
     <div className=' mt-10 flex justify-center'>
         <button className='border border-gray-300 rounded-full text-black hover:bg-gray-100 py-3 px-12'>View All</button>
     </div>
      </div>
      
   )
 }
 

