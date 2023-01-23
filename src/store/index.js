import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./showCartSlicer";
import ShoppingCartSlicer from "./shoppingCartSlicer";




const store = configureStore({
    reducer:{
        cart : cartSlicer.reducer,
        shoppingCart : ShoppingCartSlicer.reducer
    }
})


export default store;