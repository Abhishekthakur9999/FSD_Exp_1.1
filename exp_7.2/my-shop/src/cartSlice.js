// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload; // { id, name, price }
      const existing = state.items.find((it) => it.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((it) => it.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item) {
        // keep quantity >= 1
        item.quantity = Math.max(1, Number(quantity) || 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
