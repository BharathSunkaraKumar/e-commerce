import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === product.id);
            if(existing) {
                existing.quantity += 1;
            }else{
                state.items.push({...product, quantity: 1})
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if(item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if(item && item.quantity > 1 ) {
                item.quantity -= 1 ;
            }else{
                state.items = state.items.filter((item) => item.id != action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
    }
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;