import {createContext, useEffect, useState} from "react";
import {products} from '../assets/assets/assets.js'
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{

    const currency = '₹';
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(true)
    const [cartItems,setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = async(itemId,size)=>{
       
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
                cartData[itemId]+=1
        }
        else{
            cartData[itemId] = {}
            cartData[itemId] = 1
        }
        setCartItems(cartData)
    }

     console.log(cartItems)

     const getCartCount = ()=>{
        let totalCount = 0;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                 try {
                if(cartItems[items][item]>0){
                 totalCount += cartItems[items]
                }
            } catch (error) {
                
            } 
            }
          
        }
        return totalCount
     }

    const value ={
        products , currency,search,showSearch,setSearch,setShowSearch,cartItems,addToCart,getCartCount,navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

