import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) =>{
            state.items.push(action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
        removeItem: (state,action) =>{
            const index = action.payload;
            state.items.splice(index,1);
        }
    }
});
export const { addItem, clearItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;