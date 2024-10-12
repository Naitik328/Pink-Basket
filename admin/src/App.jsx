import React,{useState,useEffect} from 'react'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Statistics from './pages/Statistics'
import Sidebar from './components/Sidebar'
import Login from './components/Login'


const App = () => {

  const [token , setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div>
    {
     token==""
   ?<Login setToken = {setToken} />
   :
    
   <>
   <div className='flex'>
       <Sidebar setToken={setToken}/>

      <div>
          <Routes>
        <Route path = "/orders" element={<Orders token={token}/>}/>
        <Route path = "/products" element={<Products token={token}/>}/>
        <Route path = "/statistics" element={<Statistics token={token}/>}/>
      </Routes>
    </div>
      </div>
   </>
    }
    
      </div>
    
  )
}

export default App