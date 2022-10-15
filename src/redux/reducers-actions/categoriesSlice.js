import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const initialState = {
     activeCategory: 0,
};

const categoriesSlice = createSlice({
     name: "categories",
     initialState,
     reducers: {
          categoriesChange: (state, action) => {
               state.activeCategory = action.payload
          }
     }
});

export const { actions: { categoriesChange }, reducer } = categoriesSlice;
