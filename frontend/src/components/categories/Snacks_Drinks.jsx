import React from 'react'
import { snacks_Drinks } from '../../assets/img/imgassets';
import { Link } from 'react-router-dom';



const Snacks_Drinks = () => {
  return (
    <div className='px-3'>
        <h1 className='mt-4 mb-4 text-2xl font-medium md:text-3xl'>Snacks and Drinks</h1>
        <div className='grid grid-rows-2 grid-cols-3 gap-x-2 gap-y-8 justify-items-center lg:flex justify-around'>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.munchies} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Munchies</h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.instantFood} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Instant Snacks </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.tea_coffee} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Coffee & Tea </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.coldDrinks} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Cold drinks</h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.sweetTooth} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Sweet tooth </h2></div>
             <div className=' w-[106px] h-[123px] md:w-[150px] md:h-[180px] rounded-md text-center '><img src={snacks_Drinks.ketchup_spreads} className='bg-slate-200 rounded-md' alt="" /><h2 className='tracking-tighter mt-1'>Spreads</h2></div>
        </div>
    </div>
  )
}

export default Snacks_Drinks