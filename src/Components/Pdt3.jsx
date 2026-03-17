import React from 'react'
import classy from "../assets/classy.png"
import classy2 from "../assets/classy2.png"
import classy3 from "../assets/classy3.png"
import classy4 from "../assets/classy4.png"



export default function pdt3() {
    const styles=[
        {
            id:9,
            name:"Casual",
            image:classy,
              span:"col-span-1"
        },
        {
           id:2,
            name:"Formal",
            image:classy2 ,
             span:"col-span-2" 
        },
        {
            id:3,
            name:"Party",
            image:classy3,
             span:"col-span-2"
        },
        {
             id:4,
            name:"Gym",
            image:classy4,
              span:"col-span-1"
        }
    ]
  return (
    <div className='rounded-3xl p-10 h-auto  bg-gray-200'>    
{/* title */}
<h2 className="text-4xl font-extrabold text-center  mb-10">
   BROWSE BY DRESS STYLE  
</h2>

{/* grid */}

<div className='grid grid-cols-2 gap-6'>
    {styles.map((style)=>(
        <div key={style.id} className="relative bg-white w-auto rounded-2xl overflow-hidden h-56 p-6 flex items-center">
<h3 className='absolute top-5 left-6 text-xl font-semibold '>{style.name}</h3>

<img src={style.image} alt={style.name} className=' w-100 object-cover ' />
        </div>
    ))}
</div>

    </div>
  )
}
