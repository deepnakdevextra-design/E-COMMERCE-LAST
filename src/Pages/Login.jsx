import { useState } from "react";
import API from "../../Services/api";
import { useNavigate } from "react-router-dom";

import {Eye, EyeOff} from "lucide-react"

export default function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);


const navigate=useNavigate();


const handleLogin = async (e)=>{
 e.preventDefault();
 try{
  const res =await API.post("/login",{
    email,password
  }
  ) 
  console.log(res.data);
  navigate("/")
  

 }
 catch(err){
  console.log("error:",err);
 }

 }


  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="p-6 shadow-lg border border-gray-300 rounded-lg w-100">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
           onChange={(e) => setEmail(e.target.value)}
          
        />

<div className="relative w-full">
        <input
          type={showPassword ? "text":"password"}
          value={password}
           onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border p-2 mb-3 rounded"  
        />
        <span
         onClick={()=>setShowPassword(!showPassword)}
          className="absolute right-3 top-2 cursor-pointer">
            {showPassword?<EyeOff size={20}/>: <Eye size={20}/>}
        </span>   
</div>
        <button 
        onClick={handleLogin}
        className="w-full bg-gray-600 cursor-pointer hover:bg-gray-400 hover:text-black text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}