import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        counter: counterSlice
    }
})
