import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientsSlice";
import productsReducer from "./productsSlice";
import companyReducer from "./companySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    clients: clientsReducer,
    company: companyReducer,
  },
});
