import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
     carts: [],
     cartsLoadingStatus: "idle"
};

const mainPageSlice = createSlice({
     name: "mainPage",
     initialState,
     reducers: {
          onCartsLoading: (state) => { state.cartsLoadingStatus = "loading" },
          onCartsLoaded: (state, action) => {
               state.carts = action.payload;
               state.cartsLoadingStatus = "idle";
          },
          onCartsLoadingError: (state) => { state.cartsLoadingStatus = "error" }
     }
});

function sortByField(fieldName = "rating") {

     if (typeof fieldName === "string") {
          return (a, b) => {

               if (typeof a[fieldName] === "string") {
                    return a[fieldName] > b[fieldName] ? 1 : -1;
               }

               return a[fieldName] - b[fieldName]
          }
     } else {
          throw new Error("Please, input the argument with type 'String' !")
     }

}

export const mainPageSelector = createSelector(
     (state) => state.categories.activeCategory,
     (state) => state.mainPage.carts,
     (state) => state.mainPage.cartsLoadingStatus,
     (state) => state.filters.filterBy,
     (category, carts, cartsLoadingStatus, filter) => {
          const immerArrCarts = [...carts];

          switch (filter) {
               case "price":
                    immerArrCarts.sort(sortByField("price"));
                    break;
               case "alphabet":
                    immerArrCarts.sort(sortByField("name"));
                    break;
               default:
                    immerArrCarts.sort(sortByField("rating"));;
          }

          if (category === 0) {

               return {
                    carts: immerArrCarts,
                    cartsLoadingStatus,
               }
          }

          return {
               cartsLoadingStatus,
               carts: immerArrCarts.filter((item) => item.category === category)
          }
     }
)

export const { actions: { onCartsLoading, onCartsLoaded, onCartsLoadingError }, reducer } = mainPageSlice;


