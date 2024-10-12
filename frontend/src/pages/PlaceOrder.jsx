import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets/assets'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
import { icons } from '../assets/img/imgassets'

const PlaceOrder = () => {
       
    const [method,setMethod] = useState('cod')

    const {navigate} = useContext(ShopContext)

  return (
    <>
    <Navbar/>
    <div className='flex flex-col px-3 max-w-[1400px] mx-auto md:flex-row justify-between pt-2 sm: min-h-[80vh]'>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
           <div className='text-2xl font-medium my-3 flex gap-2 items-center'>
            <img onClick={()=>navigate(-1)} src={icons.arrow} width={30} alt="" />
              <h1>Delivery Information</h1>
           </div>
           <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
           </div>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
            <div className='flex gap-3'>
            <select className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" >
                <option value="">Mathura</option>
            </select>            <select className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text">
                <option value="">Uttar Pradesh</option>
            </select>
            </div>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone no.'/>
      
        </div>
         <div>
            <div className='min-w-80 mt-4'>
                
            </div>
            <div >
               <h1 className='text-xl font-medium'>Payment Method</h1>
               {/* PAYMENT METHOD */}
               <div className='flex gap-3 flex-col lg:flex-row mt-2'>
                <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-blue-500':''}`}></p>
                    <img src={assets.stripe_logo} alt="" />
                </div>

                <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-blue-500':''}`}></p>
                    <img src={assets.razorpay_logo} alt="" />
                </div>

                <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-blue-500':''}`}></p>
                    <p className='text-gray-500 text font-medium'>CASH ON DELIVERY</p>
                </div>
               </div>
               <div className='w-full flex justify-center mt-8'>
                <button onClick={()=>navigate('/orders')} className='bg-black text-white w-full py-2 rounded-md'>Place Order</button>
               </div> 
            </div>
         </div>
    </div>
    <Footer/>
    </>
  )
}

export default PlaceOrder