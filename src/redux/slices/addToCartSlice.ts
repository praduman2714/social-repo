import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") || "[]");

const couterSlice = createSlice({
  name: 'addToCartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log({ action });
      const { id } = action.payload.product;
      console.log(id);
      const existing = state.find(item => item.id === id);
      console.log("Exusutbg", existing);
      if (existing) {
        existing.inventory += 1;
      } else {
        state.push({ ...action.payload.product, inventory: -1 })
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updated = state.filter(i => i.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;

    }
  },
})

export const { addToCart, removeFromCart } = couterSlice.actions;
export default couterSlice.reducer;
