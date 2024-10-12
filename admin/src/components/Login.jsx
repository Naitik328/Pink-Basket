import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const onSubmitHandler = async(e)=>{
    try {
      e.preventDefault();
     const response = await axios.post('http://localhost:3000/api/users/admin' , {email , password})
     if(response.data.success){
      setToken(response.data.token)
     }
     else{
      toast.error(response.data.message)
     }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
       <div className=' border-2 rounded-md border-black px-4 py-4 min-w-[300px]'>
         <h1 className='text-center text-xl font-medium'>Admin Panel</h1>
         <div className='w-full mt-4'>
          <form onSubmit={onSubmitHandler}>
            <div className='flex flex-col gap-2'>
          <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='example@gmail.com' value={email} className='outline-none border rounded-md px-4 py-2 min-w-[300px]' />
            </div>
           <div className='flex flex-col gap-2'>
           <label>Password</label>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='*****' value={password} className='outline-none border rounded-md px-4 py-2' />
           </div>
           <div className='flex justify-center mt-5'>
                       <button type='submit' className='text-white rounded-md bg-gray-900 px-4 py-1'>Login</button>

           </div>
          </form>
         </div>
       </div>
    </div>
  )
}

export default Login