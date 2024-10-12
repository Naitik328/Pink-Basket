import React, { useState } from 'react'

const Quantity = () => {
    const stock = 8;

    const[quantity , setQuantity] = useState(1);
    const handleQuantity = () =>{
        if("d" && quantity > 1){
            setQuantity((prev)=>prev-1);
        }
        if("i" && quantity < stock){
            setQuantity((prev)=>prev+1);
        }
    };
  return (
    <div>        <div className='flex items-center gap-4'>
    <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
 <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("d")}>-</button>
 {quantity}
 <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}>+</button>
 </div>
</div></div>
  )
}

export default Quantity