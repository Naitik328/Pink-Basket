import React from 'react'
import { grocery } from '../../assets/img/imgassets'
import img1 from '../../assets/img/grocery/img1.png'
import {Link} from 'react-router-dom'
import ProductList from '../../pages/ProductList'



const Grocery_Kitchen = () => {
  return (
<div className='px-3'>
        <h1 className='mt-4 mb-4 text-2xl font-medium md:text-3xl'>Grocery and Kitchen</h1>
        <div className='grid grid-rows-2 grid-cols-3 gap-x-2 gap-y-8 justify-items-center lg:flex justify-around'>
             <Link to = "/product-list" className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={grocery.dairy_breakfast} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Dairy & Brekfast </h2></Link>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={grocery.atta_rice} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Atta & Rice </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={grocery.oil_masala} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Oil & Masale </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={grocery.biscuits_cakes} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Bakery & Biscuits </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={img1} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Dairy & Brekfast </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={img1} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Dairy & Brekfast </h2></div>
        </div>
    </div>  )
}

export default Grocery_Kitchen