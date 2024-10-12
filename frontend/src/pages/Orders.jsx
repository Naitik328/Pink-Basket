import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets/assets'
import { icons } from '../assets/img/imgassets'
import { Link } from 'react-router-dom'

const Orders = () => {
    const {products, currency,navigate} = useContext(ShopContext)
  return (
    <>
    <Navbar/>
    <div className='max-w-[1300px] mx-auto pt-2 px-3'>
       <div className='text-2xl font-medium mb-2 flex gap-2 items-center'>
        <img onClick={()=>navigate(-1)} src={icons.arrow} width={30} alt="" />

            <h1>My Orders</h1>

       </div>

       <div>
             {
                products.slice(1,4).map((item,index)=>(
                    <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <div className='flex items-start gap-6 text-sm'>
                            <img src={item.image[0]} className='w-20 md:w-16'  alt="" />
                          <div>
                              <p className='sm:text-base font-medium'>{item.name}</p>
                              <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                 <p className='text-lg'>{currency}{item.price}</p>
                                 <p>Quantity: 1</p>
                                 <p>Size: M</p>
                              </div>
                            <p className='mt-2'>Date: <span className='text-gray-400'>25,jul,2024</span></p>
                          </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                            <p className='text-sm md:text-base'>Out for Delivery</p>
                        </div>
                        <p className='text-sm text-gray-600'>Estimated Time: 15min</p>
                    </div>

                    </div>

                ))
             }
       </div>
    </div>
    <Footer/>
    </>
   )
}

export default Orders