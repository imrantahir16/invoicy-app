import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    id: "companyID",
    // image: "../../logo512.png",
    // companyName: "Digitronic",
    image: "",
    companyName: "",
    companyEmail: "",
    companyMobile: "",
    billingAddress: "",
  },
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompanyData: (state, action) => {
      try {
        const {
          image,
          companyName,
          companyEmail,
          companyMobile,
          billingAddress,
        } = action.payload;
        state.data.image = image ? image : "";
        state.data.companyName = companyName ? companyName : "";
        state.data.companyEmail = companyEmail ? companyEmail : "";
        state.data.companyMobile = companyMobile ? companyMobile : "";
        state.data.billingAddress = billingAddress ? billingAddress : "";
        localStorage.setItem("companyData", JSON.stringify(action.payload));
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { updateCompanyData } = companySlice.actions;

export const getCompanyData = (state) => state.company.data;

export default companySlice.reducer;
