import React, { useContext, useEffect, useState } from 'react'
import arrow from '../assets/icons/arrow.png'
import CartProduct from '../components/CartProduct'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const {products,cartItems,currency,navigate} = useContext(ShopContext)
  const [cartData,setCartData] = useState([])

  useEffect(()=>{
         
    const tempData = [];
    for(const items in cartItems){
       for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            quantity:cartItems[items][item]
          })
        }
       }
    }
    console.log(tempData)
  },[cartItems])
  return (
    <>
  <div className='flex gap-2 items-center m-3 h-full '>
   <img onClick={()=>navigate(-1)} src={arrow} width={25} alt="" />
   <h2 className='font-medium text-xl'>Shopping Cart</h2>
  </div>

 <div className='px-4 flex flex-col md:flex-row gap-3'>

  <div className='max-w-[800px] w-full'>
   <span className='text-gray-500'>2 items</span>
   <hr className='h-1 bg-black mt-1' />
    <CartProduct/>
    <CartProduct/>
    <CartProduct/>
  </div>

  <div className='w-full max-w-[400px] mx-auto border px-3 py-2 rounded-md'>
<div className='flex justify-between'>
  <h2 className='text-lg text-gray-600'>Subtotal</h2>
  <span>40</span>
  </div>   
<div className='flex justify-between'>
  <h2 className='text-lg text-gray-600'>Delivery fee</h2>
  <span>20</span>
</div>
<div className='flex justify-between'>
  <h2 className='text-lg font-semibold'>Total</h2>
  <span>60</span>
</div>

<Link to ="/placeorder" className='w-full mt-4'>
  <button className='bg-black text-white px-4 py-1 rounded-md w-full'>Checkout</button>
</Link>
  </div>

  </div>
    </>
  )
}

export default Cart