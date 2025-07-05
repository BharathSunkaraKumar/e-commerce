import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    status: 'idle',
    error: null,
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.items = action.payload,
            state.status = 'succeede'
        }
    }
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;