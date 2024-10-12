import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const Featured = () => {

  const {products} = useContext(ShopContext)

  const[featuredProducts , setFeaturedProducts]= useState([])
  
  useEffect(()=>{
    setFeaturedProducts(products.slice(0,10));
  },[])
  return (
    
    <div className='mt-3'>
       <div className='text-center'>
        <h1 className='text-2xl font-medium'>Combo Offers</h1>
        <p className='text-gray-600'>Best Sellers products with highest rating</p>
       </div>

       <div className=' mt-3 md:h-[150px]'>

        <div className='flex float-left scrol-bar overflow-auto w-full gap-4 px-4'>
{
        featuredProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name = {item.name} price={item.price}/>
        ))
}
        </div>
        
        
         
       </div>
    </div>
  )
}

export default Featured