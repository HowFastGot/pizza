import { configureStore } from "@reduxjs/toolkit";

import { reducer as categories } from "./reducers-actions/categoriesSlice";
import { reducer as filters } from "./reducers-actions/filtersSlice";
import { reducer as mainPage } from "./reducers-actions/mainPageSlice";
import { reducer as pizzaCart } from "./reducers-actions/pizzaCartSlice";
import { reducer as cart } from "./reducers-actions/cartSlice"



const store = configureStore({
     reducer: { categories, filters, mainPage, pizzaCart, cart },
     devTools: process.env.NODE_ENV !== "production"
});


export default store;