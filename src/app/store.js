import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from '../features/products/cartSlice'

export const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch)