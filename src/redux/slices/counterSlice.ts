import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

const couterSlice = createSlice({
  name: 'createSlice',
  initialState,
  reducers: {
    increment: (state) => {state.value+=1},
    decrement: (state) => {state.value-=1},
    reset: (state) => {state.value = 0}
  },
})

export const {increment, decrement, reset} = couterSlice.actions;
export default couterSlice.reducer;
