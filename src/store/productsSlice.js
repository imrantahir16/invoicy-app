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
  editedId: null,
  deletedId: null,
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
    },

    resetProductForm: (state, action) => {
      state.newForm = { ...action.payload };
    },

    setAllProducts: (state, action) => {
      state.data = action.payload;
    },

    setEditedId: (state, action) => {
      state.editedId = action.payload;
    },

    setDeletedId: (state, action) => {
      state.deletedId = action.payload;
    },
  },
});

export const {
  addProduct,
  resetProductForm,
  setAllProducts,
  setEditedId,
  setDeletedId,
} = productsSlice.actions;

export const getAllProducts = (state) => state.products.data;
export const getNewForm = (state) => state.products.newForm;
export const getEditedId = (state) => state.products.editedId;
export const getDeletedId = (state) => state.products.deletedId;

export default productsSlice.reducer;
