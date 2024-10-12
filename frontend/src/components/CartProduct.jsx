import React from 'react'
import Quantity from './Quantity'

const CartProduct = () => {
  return (
    <>
    <div className='flex justify-between mt-3'>
        <div className='flex gap-4'>
     <div className='w-[80px] h-[80px] bg-gray-200'></div>
      <div className='flex flex-col'>
        <h2>Product Name</h2>
        <span>details</span>
        <span>price</span>
     </div>
        </div>
     <div className='flex items-center'>quantity</div>
    </div> 
    <hr className='mt-3' />
    </>
  )
}

export default CartProduct