import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      "id": "prod001",
      "name": "Smart Watch",
      "price": 199.99,
      "description": "Track fitness, receive notifications, and more",
      "inventory": 15
    },
    {
      "id": "prod002",
      "name": "Bluetooth Speaker",
      "price": 79.99,
      "description": "Portable speaker with excellent sound quality",
      "inventory": 8
    },
    {
      "id": "prod003",
      "name": "USB-C Charging Cable",
      "price": 14.99,
      "description": "Fast charging braided cable, 2m length",
      "inventory": 30
    },
    {
      "id": "prod004",
      "name": "Wireless Earbuds",
      "price": 129.99,
      "description": "True wireless earbuds with noise cancellation",
      "inventory": 12
    },
    {
      "id": "prod005",
      "name": "Power Bank",
      "price": 49.99,
      "description": "20000mAh portable charger with dual USB ports",
      "inventory": 20
    }
];

const couterSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
   
  },
})

// export const {increment, decrement, reset} = couterSlice.actions;
export default couterSlice.reducer;
