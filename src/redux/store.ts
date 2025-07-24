import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import counterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";
import addToCartSlice from "./slices/addToCartSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        counter: counterSlice,
        products: productSlice,
        addToCart: addToCartSlice
    }
})

