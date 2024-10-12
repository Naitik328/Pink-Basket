import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import EmailVerificationPage from './pages/emailVerify'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/cart" element={<Cart/>}/>
            <Route path = "/product-list" element={<ProductList/>}/>
            <Route path= "/login" element={<Login/>}/>
            <Route path= "/register" element={<Register/>}/>
            <Route path= "/verify-email" element={<EmailVerificationPage/>}/>
            <Route path= "/placeorder" element={<PlaceOrder/>}/>
            <Route path= "/orders" element={<Orders/>}/>
        </Routes>
    </div>
  )
}

export default App