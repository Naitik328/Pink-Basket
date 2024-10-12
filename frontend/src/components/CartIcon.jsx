import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import bag from '../assets/icons/shopping-bag.png'


const CartIcon = () => {
    const {getCartCount} = useContext(ShopContext)

  return (
    <>
         <Link className='relative' to ="/cart">
          <img src={bag} className='' alt="" width={40} />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black aspect-square rounded-full text-[9px] text-white'>{getCartCount()}</p>
        </Link>
    </>
  )
}

export default CartIcon