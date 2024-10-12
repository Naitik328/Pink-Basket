import React, { useState } from 'react'
import logo from '../assets/icons/logo.png'
import {Link, useNavigate} from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { Loader } from 'lucide-react'


const Login = () => {
const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {login,error,isLoading} = useAuthStore();

  const handleLogin = async(e)=>{
    e.preventDefault()

    try {
       await login(email,password)
       navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex justify-center items-center w-full h-screen px-3 bg-[url(/bg6.jpg)] bg-cover bg-center '>
      <div className='w-[370px] flex flex-col gap-11 items-center'> 

         <div className='text-center'>
          <img src={logo} width={300} alt="" />
           <h2 className='text-xl font-medium '>Welcome to Pink Basket</h2>
         </div>

         <div className='w-full'>
          <form onSubmit={handleLogin} className='flex flex-col gap-3'>
            <div className='w-full flex flex-col'>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-slate-100 px-4 py-3 rounded-3xl border-black border-2' placeholder='Enter your email' />
            </div>

            <div className='w-full flex flex-col'>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-slate-100 px-4 py-3 rounded-3xl border-2 border-black' placeholder="Enter your password" />
            </div>
              <div className='w-full flex flex-col gap-[10px] items-center'>
                 <button className='bg-yellow-200 py-2 w-full text-lg rounded-3xl' disabled={isLoading} >{isLoading?<Loader className='animate-spin mx-auto' size={23}/>:"Login"}</button>
                 <h2 className='text-yellow-400'>Forget password?</h2>
              </div>
          </form>
         </div>

         <div className='text-white'>Don't have an account? <Link to ="/register"><span className='text-yellow-400'>Register!</span></Link></div>

      </div>
    </div>
  )
}

export default Login