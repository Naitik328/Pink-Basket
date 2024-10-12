import React, { useContext, useState } from 'react'
import bag from '../assets/icons/shopping-bag.png'
import logo from '../assets/icons/logo2.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/assets';
import user from '../assets/icons/user.png'
import CartIcon from './CartIcon';
import { icons } from '../assets/img/imgassets'


const Navbar = () => {

  const [ visible,setVisible] = useState(false)

  return (
    <div className='h-[70px] w-full border'>
      <div className='h-full w-full flex items-center justify-between px-3'>
        <Link to ="/"><img src={logo} width={64} alt="" /></Link>
        <div className='flex gap-3'>
         <CartIcon/>
        <div>
          <img onClick={()=>setVisible(true)} src={user} width={42} alt="" />

        </div>
        </div>
        
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden h-screen bg-white transition-all ${visible ? 'max-w-[700px] w-full':'w-0'}`}>
      <>
     <div className='w-full px-3 py-3 flex items-center gap-3'>
        <img onClick={()=>{setVisible(false)}} src={icons.arrow} width={30} alt="" />
        <h2 className='text-2xl font-medium'>Back</h2>
     </div>
    
    <div className='flex flex-col items-center py-4 w-[90%] mx-auto gap-11 h-screen'>
        <div className='flex justify-center items-center gap-4 border w-full py-4 rounded-md '>
            <img src={icons.user} width={50} alt="" />
            <h2 className='text-2xl font-medium'>Welcome Name</h2>
        </div>

        <div className='flex flex-col w-full gap-14 z-2 bg-white'>
            <ul className='text-xl font-medium text-gray-700 flex flex-col gap-3'>
                <Link to ="/orders"><li className='border w-full rounded-md py-3 flex justify-center items-center gap-2 active:bg-gray-100 shadow-md'><img src={icons.orders} width={30} alt="" />Your Orders</li></Link>
                <li className='border w-full rounded-md py-3 flex justify-center items-center gap-2 active:bg-gray-100 shadow-md'> <img src={icons.contact} width={30} alt="" />Contact Us</li>
                <li className='border w-full rounded-md py-3 flex justify-center items-center gap-2 active:bg-gray-100 shadow-md'><img src={icons.feedback} width={30} alt="" /> Give your feedback</li>
                <li className='border w-full rounded-md py-3 flex justify-center items-center gap-2 active:bg-gray-100 shadow-md'><img src={icons.password} width={30} alt="" />Change password</li>
                <li className='border w-full rounded-md py-3 flex justify-center items-center gap-2 active:bg-gray-100 shadow-md'><img src={icons.store} width={30} alt="" />Visit our Store</li>
            </ul>

            <button className='w-full border bg-red-600 py-2 rounded-md text-xl text-white flex justify-center gap-2 active:bg-red-500'>Logout</button>
        </div>
    </div></>      </div>
    </div>
  )
}

export default Navbar