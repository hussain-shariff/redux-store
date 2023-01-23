import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    notification : null
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggleCart(state){
            state.showCart = !state.showCart
        },
        setNotification(state, actions){
            state.notification = {
                status : actions.payload.status,
                message : actions.payload.message,
                title : actions.payload.title
            }
        }
    }
})

export default cartSlicer;
export const cartActions = cartSlicer.actions;