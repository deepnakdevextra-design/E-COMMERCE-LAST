import React from 'react'
import { Mail } from 'lucide-react'
import { FaFacebook,FaTwitter,FaInstagram,FaGithub} from 'react-icons/fa'
import { FaPaypal,FaGooglePay,FaCcVisa,FaCcMastercard,FaApplePay } from 'react-icons/fa6';

export default function Feature() {
    const socials = [
  { icon: FaTwitter },
  { icon: FaFacebook },
  { icon: FaInstagram },
  { icon: FaGithub }
];

const payments=[
       {method:FaCcVisa},
       { method:FaCcMastercard},
        {method:FaPaypal},
       { method:FaApplePay},
        {method:FaGooglePay}

    
]
  return (
  <div  className="bg-gray-100 pt-40 relative pb-10">
<div className='bg-black flex items-center justify-between px-10 py-8 max-w-6xl mx-auto rounded-3xl'>
    {/* left text */}
    
<h2 className='text-white text-4xl font-extrabold max-w-xl'> 
    STAY UPTO DATE ABOUT OUR LATEST OFFERS
</h2>


{/* right form */}

<div className='flex flex-col gap-3 w-96 '>
<div className='flex items-center bg-white rounded-full px-4 py-3'>
<Mail size={20} className='text-gray-400 mr-2'/>
<input type="email"
placeholder='Enter your email adress'
className='bg-white outline-none w-full text-sm' />
</div>

 <button className="bg-white text-black rounded-full py-3 font-medium hover:bg-gray-200 transition">
          Subscribe to Newsletter
        </button>

</div>
</div>

  <div className="max-w-6xl mx-auto mt-16 grid grid-cols-5 gap-10">
    <div>
      <h2 className="text-3xl font-bold">SHOP.CO</h2>
      <p className="text-gray-500 mt-3">
        We have clothes that suits your style and which you're proud to wear.
      </p>

     <div className='flex gap-3'>
        {
            socials.map((item,index)=>{
                const Icon=item.icon;
                return(
                    <div key={index} className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition'>
                        <Icon size={18}/>
                    </div>
                )

            })
        }
        </div> 
    </div>

    {/* company */}
    <div>
          <h4 className="font-semibold mb-3">COMPANY</h4>
          <ul className="text-gray-500 space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
{/* help */}
 <div>
          <h4 className="font-semibold mb-3">HELP</h4>
          <ul className="text-gray-500 space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
    <div>
          <h4 className="font-semibold mb-3">FAQ</h4>
          <ul className="text-gray-500 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

           {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">RESOURCES</h4>
          <ul className="text-gray-500 space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to – Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>

  </div>

  <div className='border-t  border-gray-300 mt-10 pt-6 pl-40 flex items-center'>
    {/* left text */}
<p className='text-gray-500 text-sm'> Shop.co © 2000-2023, All Rights Reserved</p>

{/* payment icons */}
  </div>
  <div className='flex justify-end items-center  gap-3'>
        {
            payments.map((item,index)=>{
                const Payment=item.method;
                return(
                    <div key={index} className=' flex justify-end w-25   border border-gray-300 bg-white px-7 hover:bg-black hover:text-white  rounded-md shadow-sm transition'>
                       <Payment  size={35}/>
                    </div>
                )

            })
        }
        </div> 

</div>
  )
}
