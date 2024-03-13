import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'




export const ShopContext = createContext(null)




const getdefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0
        
    }
    return cart
}




const ShopContextProvider = (props) =>{
    const [cartitem, setcartitem] = useState(getdefaultCart())
   

    const addTocart = (itemId) =>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartitem)
    }


    const removeFromCart = (itemId) =>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_product, cartitem, addTocart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
} 



export default ShopContextProvider