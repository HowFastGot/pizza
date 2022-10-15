import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     selectIsOpen: false,
     activeFilter: 0,
     filterBy: "rating"
};

const filtersSlice = createSlice({
     name: "filters",
     initialState,
     reducers: {
          onClickOnFilterOption: (state, action) => { state.activeFilter = action.payload },
          onClickOnSelectBlock: (state, action) => { state.selectIsOpen = action.payload },
          onChangeFilterBy: (state, action) => { state.filterBy = action.payload }
     }
});

export const { actions: { onClickOnFilterOption, onClickOnSelectBlock, onChangeFilterBy }, reducer } = filtersSlice;