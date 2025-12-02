import { createSlice } from "@reduxjs/toolkit";
import testIcon from '../../../public/images/image-cake-thumbnail.jpg';

const initialState = {

  cart: []

  // cart: [
  //   {
  //     id: 1,
  //     name: 'moein',
  //     category: 'faf',
  //     quantity: 1,
  //     price: 32,
  //     thumbnail: testIcon,
  //     totalPrice: 42 * 1,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (!item) return;

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) {
        state.cart = state.cart.filter((i) => i.id !== action.payload);
      }
    },
    cleanCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  cleanCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
