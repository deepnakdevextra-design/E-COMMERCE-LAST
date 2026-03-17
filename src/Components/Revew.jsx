import React from 'react'
import { ArrowLeft,ArrowRight,Star,CheckCircle,Mail } from 'lucide-react'

export default function Revew() {
    const reviews = [
{
id:1,
star:5,
name:"Sarah M.",
text:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
},
{
id:2,
star:4,
name:"Alex K.",
text:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."
},
{
id:3,
name:"James L.",
text:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co."
}
]

  return (
    <div className='p-10'>
<div className='flex justify-between items-center mb-10'>
  <h2 className='text-4xl font-extrabold pt-4  mb-10'>OUR HAPPY CUSTOMERS

  </h2>
        <div className="flex gap-4 justify-end px-7">
  <ArrowLeft size={24} className="  cursor-pointer" />
  <ArrowRight size={24} className="cursor-pointer" />
</div>
</div>

{/* CARDS */}
<div className='grid grid-cols-3 gap-6'>
{reviews.map((review)=>(
 <div key={review.id} className='border border-gray-300 rounded-2xl p-9 '>

    <div className='flex text-yellow-400 mb-3'>
        {[...Array(5)].map((_,i)=>(
            <Star key={i} size={18} fill="currentColor" />
        ))}
    </div>

   <div className="flex items-center gap-2 mb-3">
<h3 className="font-semibold text-lg">
{review.name}
</h3>

<CheckCircle
size={18}
className="text-green-500"
/>
</div>

<p className="text-gray-500 text-sm">
"{review.text}"
</p>
 </div>   
))}
</div>
    </div>
  )
}
