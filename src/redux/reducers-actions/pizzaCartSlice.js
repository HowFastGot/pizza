import { createSlice } from "@reduxjs/toolkit";


const initialState = {};

const pizzaCartSlice = createSlice({
     name: "pizzaCart",
     initialState,
     reducers: {
          onChangeActiveSize: (state, action) => { state.activeSize = action.payload },
          onChangeActiveType: (state, action) => { state.activeType = action.payload },
     }
});

export const { actions: { onChangeActiveSize, onChangeActiveType }, reducer } = pizzaCartSlice