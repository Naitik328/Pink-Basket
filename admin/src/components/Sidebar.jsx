import React from 'react'
import logo from '../assets/logo/logo2.png'
import { NavLink } from 'react-router-dom'

const Sidebar = ({setToken}) => {
  return (
    <div className='w-[20%] md:w-[18%] bg-[#89CFF0] h-screen flex flex-col gap-3'>
      <div className='w-full flex justify-center'><img src={logo} width={200} alt="" /></div>
      <div>
        <ul className='text-xl font-medium ml-5 flex flex-col gap-3'>            
            <NavLink to="/statistics"><li className='px-4 py-2 border border-[#002D62] border-r-0'>Statistics</li></NavLink>
            <NavLink to="/orders"><li className='px-4 py-2 border border-[#002D62] border-r-0'>Orders</li></NavLink>
            <NavLink to="/products"><li className='px-4 py-2 border border-[#002D62] border-r-0'>Products</li></NavLink>
        </ul>
      </div>
      <div>
      <button onClick={()=>setToken('')} className='bg-gray-700 text-white rounded-md px-4 py-1'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar