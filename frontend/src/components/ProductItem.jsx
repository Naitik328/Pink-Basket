import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddtoCart from './AddtoCart'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,image,name,price}) => {

  const {addToCart} = useContext(ShopContext)
  return (
    <div className='mb-4'>
 <div className='text-gray-700 cursor-pointer'>
    <div className='w-[130px] md:w-[300px] '>
        <img className='hover:scale-100 transition ease-in-out' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <div>
          <p className='text-sm font-medium'>₹{price}</p>
    </div>
    </div>
    <div className='w-full flex justify-start mt-2'>
       <button onClick={()=>addToCart(id)} className='border px-3 rounded-md active:bg-black active:text-white'>
        Add to Cart
      </button>
    </div>
     
    </div>
   
  )
}

export default ProductItem