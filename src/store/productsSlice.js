import { createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";

const initialState = {
  data: [],
  newForm: {
    id: "",
    productID: "",
    productName: "",
    price: 0,
    quantity: 0,
  },
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newData = [...state.data, action.payload];
      console.log(newData);
      state.data = newData;
      localforage.setItem("products", newData);

      const resetForm = {
        id: "",
        productID: "",
        productName: "",
        price: 0,
        quantity: 0,
      };
      state.newForm = { resetForm };
    },

    resetProductForm: (state, action) => {
      state.newForm = { ...action.payload };
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
