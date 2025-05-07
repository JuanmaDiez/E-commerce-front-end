import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const searchProduct = state.find((product) => {
        return product._id === action.payload._id;
      });
      if (!searchProduct) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        return state.map((product) => {
          return product._id !== action.payload._id
            ? product
            : { ...product, quantity: product.quantity + 1 };
        });
      }
    },
    removeFromCart(state, action) {
      if (action.payload.quantity > 1) {
        return state.map((product) => {
          return product._id !== action.payload._id
            ? product
            : { ...product, quantity: product.quantity - 1 };
        });
      } else {
        return state.filter((product) => {
          return product._id !== action.payload._id;
        });
      }
    },
    emptyCart(state, action) {
      return [];
    },
  },
});

export const { emptyCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
