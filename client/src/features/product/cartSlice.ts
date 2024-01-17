import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/data.types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as any)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems?.find(
        (x: Product) => x._id === item._id,
      );
      if (existItem) {
        existItem.quantity += 1;
      } else {
        item.quantity = 1;
        state.cartItems = [...state.cartItems, item];
      }

      // calculate items price
      state.itemsPrice = state.cartItems.reduce(
        (acc: number, item: any) => acc + item.price * item.quantity,
        0,
      );
      // calculate shipping price
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;
      // calculate tax price
      state.taxPrice = state.itemsPrice * 0.1;
      // calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const existItem = state.cartItems.find(
        (item: any) => item._id === action.payload.product._id,
      );
      if (existItem) {
        existItem.quantity += action.payload.quantity;
      } else {
        action.payload.product.quantity = 1;
        state.cartItems = [...state.cartItems, action.payload.product];
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
