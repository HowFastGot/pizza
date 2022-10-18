import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     items: [],
     totalAmount: 0,
     totalCount: 0,
};

const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          cartAddNewCarts: (state, action) => {
               state.items = [...state.items, action.payload]
               state.totalCount = state.items.length;
               state.totalAmount = state.items.reduce((acc, item) => {
                    return item.price + acc;
               }, 0)
          },
          cartClearIt: (state) => {
               state.items = [];
               state.totalCount = 0;
               state.totalAmount = 0;
          },
          cartDeleteByID: (state, action) => {
               console.log(action.payload)
               state.items = state.items.filter(item => item.id !== action.payload);
               state.totalCount = state.items.length;
               state.totalAmount = state.items.reduce((acc, item) => {
                    return item.price + acc;
               }, 0)
          },
          cartAddToList: (state, action) => {
               state.items = [...state.items, action.payload]
               state.totalCount = state.items.length;
               state.totalAmount = state.items.reduce((acc, item) => {
                    return item.price + acc;
               }, 0)
          },
          cartDecreaseCount: (state, action) => {

               const cartItems = state.items.filter((item) => item.id === action.payload)

               if (cartItems.length === 1) return;

               state.items.splice(state.items.indexOf(cartItems[0]), 1);

               state.items = [...state.items];
               state.totalCount = state.items.length;
               state.totalAmount = state.items.reduce((acc, item) => {
                    return item.price + acc;
               }, 0)
          }

     }
});

export const { actions: { cartAddNewCarts, cartClearIt, cartDeleteByID, cartAddToList, cartDecreaseCount }, reducer } = cartSlice;