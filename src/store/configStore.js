import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientsSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    clients: clientsReducer,
  },
});
