import React from 'react'
import img from '../assets/sample/2.jpg'

const ItemCard = () => {
  return (
    <div className='border w-[175px] h-[240px] rounded-md px-3 bg-white shadow-md'>
      <div className=''>
        <div className='w-full flex justify-center'><img src={img} width={150} alt="" /> </div>
         <h2 className='font-medium'>Blue Lays</h2>     
         <span className='text-gray-500'>48gm</span>
    <div className='flex justify-between mt-3'>
      <span className='font-medium'>20</span>
      <button className='border px-2 rounded-md'>Add to Cart</button>
    </div>
      </div>
    </div>
  )
}

export default ItemCard