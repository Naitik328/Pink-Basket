import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets/assets'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
  return showSearch? (
    <div className='border-t border-b bg-gray-50 text-center w-full'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-3 py-2 max-w-[600px] my-3 mx-2 rounded-full w-[90%]'>
   <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' className='outline-none flex-1 bg-inherit w-full' />
       <img src={assets.search_icon} className='w-4' alt="" />
        </div>

    </div>
  ):null
}

export default SearchBar