import React from 'react'
import pic1 from "../assets/Frame 32.png"
import pic2 from "../assets/Frame 33.png"
import pic3 from "../assets/Frame 34.png"
import pic4 from "../assets/Frame 38.png"
import { Star } from 'lucide-react'


export default function Product() {
const products=[
    {
    id:1,
        pic:pic1,
      name:"T-SHIRT WITH TAPE DETAILS",
      star:5,
      price:120,
    },
    {
        id:2,
        pic:pic2,
        name:"SKINNY FIT JEANS",
        star:4,
        price:240,
        oldPrice:260,
        discount:"-20%"
    
    },
    {
        id:3,
           pic:pic3,
        name:"CHECKERED SHIRT",
        star:4,
          price:180,
      
    },
    {
        id:4,
         pic:pic4,
        name:"SLEEVE STRIPED T-SHIRT",
        star:5,
        price:130,
        oldPrice:160,
        discount:"-30%"
       
    }
]

  return (
  <div className='h-auto'>
    <div >
        <h2  className='text-5xl  text-center font-extrabold my-10 '>NEW ARRIVALS</h2>
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
