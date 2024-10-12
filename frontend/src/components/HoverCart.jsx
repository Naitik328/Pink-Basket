import React from 'react'
import CartIcon from './CartIcon'
import emoji from '../assets/emojis/2.gif'
import { Link } from 'react-router-dom'

const HoverCart = () => {
  return (
    <div className='w-[90%] mx-auto h-[60px] sticky bottom-7 md:hidden'>
         <div className='w-full h-full bg-[#fbd9d2] border-2 border-black rounded-full flex items-center justify-between px-3 shadow-lg'>
            <CartIcon/>
            <Link to= "/placeorder"><h2 className='text-xl font-medium'>Checkout</h2></Link>
            <img src={emoji} width={34} alt=""/>
         </div>
    </div>
  )
}

export default HoverCart