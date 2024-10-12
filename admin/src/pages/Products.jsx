import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'

const Products = () => {

  const [list,setList] = useState([])

  const fetchList= async()=>{

    try {
      const response = await axios.get('http://localhost:3000/api/products/list')
      if(response.data.success){
        setList(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='m-6'>
    <p className='text-xl font-medium mb-4'>All Products list</p>
    <div className='flex flex-col gap-2'>

      <div className='md:grid grid-cols-[2fr_3fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray text-sm'>
        <b>Image</b>
        <b>Title</b>
        <b>Category</b>
        <b>Price</b>
        <b>Quantity</b>

      </div>
      {
        list.map((item,index)=>(
          <div className='md:grid grid-cols-[2fr_3fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray text-sm' key={index}>
            <img src={item.image[0]} alt="" />
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.pice}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Products