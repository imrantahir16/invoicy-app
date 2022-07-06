import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  newForm: {
    id: "",
    image: "",
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
      state.data = newData;
      localStorage.setItem("products", JSON.stringify(newData));
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

    onConfirmEditProduct: (state, action) => {
      const isFindIndex = state.data.findIndex(
        (product) => product.id === state.editedId
      );
      if (isFindIndex !== -1) {
        state.data[isFindIndex] = { ...action.payload };
      }
      state.editedId = null;
      localStorage.setItem("products", JSON.stringify([...state.data]));
    },

    onConfirmDeleteProduct: (state, action) => {
      const newData = state.data.filter(
        (product) => product.id !== state.deletedId
      );
      state.data = newData;
      state.deletedId = null;
      localStorage.setItem("products", JSON.stringify(newData));
    },
  },
});

export const {
  addProduct,
  resetProductForm,
  setAllProducts,
  setEditedId,
  setDeletedId,
  onConfirmEditProduct,
  onConfirmDeleteProduct,
} = productsSlice.actions;

export const getAllProducts = (state) => state.products.data;
export const getNewForm = (state) => state.products.newForm;
export const getEditedId = (state) => state.products.editedId;
export const getDeletedId = (state) => state.products.deletedId;

export default productsSlice.reducer;
