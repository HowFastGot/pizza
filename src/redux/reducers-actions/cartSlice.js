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
               const pizzaTypeArr = state.items.filter(item => item.id === action.payload);

               if (pizzaTypeArr.length === 1) return;
               pizzaTypeArr.pop();

               state.items = [...pizzaTypeArr].concat(state.items.filter(item => item.id !== action.payload))
               state.totalCount = state.items.length;
               state.totalAmount = state.items.reduce((acc, item) => {
                    return item.price + acc;
               }, 0)
          }

     }
});

export const { actions: { cartAddNewCarts, cartClearIt, cartDeleteByID, cartAddToList, cartDecreaseCount }, reducer } = cartSlice;