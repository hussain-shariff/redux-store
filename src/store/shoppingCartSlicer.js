import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items:[],
    isChange : false
}
const ShoppingCartSlicer = createSlice({
    name: 'shopping cart',
    initialState: initialCartState,
    reducers:{
        addItem(state, actions){
            let newItem = actions.payload;
            let existingItem = state.items.find(item=> item.id === newItem.id);
            state.isChange = true;
            if (!existingItem){
                state.items.push(newItem)
            }
            else{
                existingItem.quantity++;
                existingItem.total += existingItem.price
            }
            
        },
        removeItems(state, actions){
            state.isChange = true;
            let newItem = actions.payload;
            let existingItem = state.items.find(item=> item.id === newItem.id);
            if (existingItem.quantity === 1){
                state.items = state.items.filter(item=> item.id !== newItem.id);
            }
            else{
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
            }
        },
        replaceCart(state, actions){
            state.items = actions.payload.items
        }
    } 
})

export default ShoppingCartSlicer;
export const ShoppingCartActions = ShoppingCartSlicer.actions;