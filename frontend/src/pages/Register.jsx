import React, { useState } from 'react'
import logo from '../assets/icons/logo.png'
import {Link,useNavigate} from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { Loader } from 'lucide-react'




const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const {register,error,isLoading} =useAuthStore();

    const handleSignup = async(e) =>{
        e.preventDefault();

        try {
            await register(name,email,password)
            navigate("/verify-email")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='flex justify-center items-center w-full h-screen px-3 bg-[url(/bg6.jpg)] bg-cover bg-center'>
    <div className='w-[370px] flex flex-col gap-11 items-center'> 

       <div className='text-center'>
        <img src={logo} width={300} alt="" />
         <h2 className='text-xl font-medium'>Create your account!</h2>
       </div>

       <div className='w-full'>
        <form onSubmit={handleSignup} className='flex flex-col gap-3'>
        <div className='w-full flex flex-col'>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='bg-slate-100 px-4 py-3 rounded-3xl border-2 border-black' placeholder='Enter your name' />
          </div>
          <div className='w-full flex flex-col'>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-slate-100 px-4 py-3 rounded-3xl border-2 border-black' placeholder='example@gmail.com' />
          </div>

          <div className='w-full flex flex-col'>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-slate-100 px-4 py-3 rounded-3xl border-2 border-black' placeholder='Enter a password' />
          </div>
            <div className='w-full flex flex-col items-center mt-4'>
               <button type='submit' className='bg-yellow-200 py-2 w-full text-lg rounded-3xl' >{isLoading?<Loader className='animate-spin mx-auto' size={23}/>:"Register"}</button>
            </div>
        </form>
       </div>

       <div className='text-white'>Already have an account?<Link to = "/login"> <span className='text-yellow-400'>Login!</span></Link></div>

    </div>
  </div>  )
}

export default Register