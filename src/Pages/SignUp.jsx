import React from 'react'
import { useState } from 'react';
import API from '../../Services/api';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate()

  const handleRegister=async()=>{
    try{
const res=await API.post("/signup",{
  name, email,password
});
// navigate("/login")
console.log(res.data);
console.log({name,email,password});


    }catch(err){
      if(err.response){
        const message=err.response.data.message
        console.log(message);
        
        if(message==="User already exists"){
          navigate("/login")
        }
      }
      else{
        console.log("error:",err);

      }   

    }
  }
  
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='border border-gray-300 w-100 shadow-lg p-6 rounded-lg'>
<h2 className='text-2xl font-bold mb-4'>
  Signup  
</h2>
<input type="text"
placeholder='Name'
onChange={(e)=>setName(e.target.value)}
className='w-full  border p-2 mb-3 rounded' />

<input 
type="email"
placeholder='Email'
onChange={(e)=>setEmail(e.target.value)}
className=' w-full p-2 border rounded mb-3 ' />

<input
 type="password"
placeholder='Password'
onChange={(e)=>setPassword(e.target.value)}
className='border p-2 w-full mb-3 rounded ' />

<button onClick={handleRegister}
className='w-full bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-600'>Signup</button>

        </div>
    </div>
  )
}
