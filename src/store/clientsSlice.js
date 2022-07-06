import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  newForm: {
    id: "",
    image: "",
    clientName: "",
    email: "",
    mobileNo: "",
    address: "",
  },
  editedId: null,
  deletedId: null,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addNewClient: (state, action) => {
      const newData = [...state.data, action.payload];
      state.data = newData;
      localStorage.setItem("clients", JSON.stringify(newData));
    },

    resetClientForm: (state, action) => {
      state.newForm = { ...action.payload };
    },

    setAllClients: (state, action) => {
      state.data = action.payload;
    },

    setEditedId: (state, action) => {
      state.editedId = action.payload;
    },

    setDeletedId: (state, action) => {
      state.deletedId = action.payload;
    },
    onConfirmEditClient: (state, action) => {
      const isFindIndex = state.data.findIndex(
        (client) => client.id === state.editedId
      );
      if (isFindIndex !== -1) {
        state.data[isFindIndex] = { ...action.payload };
      }
      state.editedId = null;
      localStorage.setItem("clients", JSON.stringify([...state.data]));
    },

    onConfirmDeleteClient: (state, action) => {
      const newData = state.data.filter(
        (client) => client.id !== state.deletedId
      );
      state.data = newData;
      state.deletedId = null;
      localStorage.setItem("clients", JSON.stringify(newData));
    },
  },
});

export const getAllClients = (state) => state.clients.data;
export const getNewForm = (state) => state.clients.newForm;
export const getEditedId = (state) => state.clients.editedId;
export const getDeletedId = (state) => state.clients.deletedId;

export const {
  addNewClient,
  resetClientForm,
  setAllClients,
  setEditedId,
  setDeletedId,
  onConfirmEditClient,
  onConfirmDeleteClient,
} = clientsSlice.actions;

export default clientsSlice.reducer;
