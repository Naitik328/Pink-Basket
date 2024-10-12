import React from 'react'
import arrow from '../assets/icons/arrow.png'
import search from '../assets/icons/search.png'
import ItemCard from '../components/ItemCard'
import {Link, useParams} from 'react-router-dom'
import CategoryNav from '../components/CategoryNav'
import CartIcon from '../components/CartIcon'
import HoverCart from '../components/HoverCart'
import Footer from '../components/Footer'

const ProductList = () => {
          const {categoryId} = useParams();
  return (
<div>
        <div className='flex justify-between items-center px-3 py-3 border w-full'>
            <div className='flex gap-2'>
            <Link to = "/" ><img src={arrow} width={30} alt="" /></Link>
            <h2 className='text-2xl font-medium'>Title</h2>
            </div>
            <div>
            <CartIcon/>
            </div>
        </div>

       <CategoryNav/>

        <div className='max-w-[1000px] mx-auto grid grid-cols-2 w-full justify-items-center gap-y-2 mt-2 px-1 md:grid-cols-3 lg:grid-cols-5'>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>

        </div>
        <HoverCart/>
        <Footer/>
    </div>  )
}

export default ProductList