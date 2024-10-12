import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/banners/Banner'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Snacks_Drinks from '../components/categories/Snacks_Drinks'
import Grocery_Kitchen from '../components/categories/Grocery_Kitchen'
import Beauty_PersonalCare from '../components/categories/Beauty_PersonalCare'
import Banner2 from '../components/banners/Banner2'
import Banner3 from '../components/banners/Banner3'
import SearchBar from '../components/SearchBar'
import HoverCart from '../components/HoverCart'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Banner/>
      <Featured/>
      <div className='max-w-[1300px] mx-auto'>
            <Grocery_Kitchen/>
            <Banner2/>
      <Snacks_Drinks/>
      <Banner3/>
      <Beauty_PersonalCare/>
      <Banner3/>

      </div>
      <HoverCart/>
        <Footer/>

    </div>
  )
}

export default Home