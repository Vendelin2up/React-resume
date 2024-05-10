import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    name: "",
    email: "",
    message: "",
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
    },
  },
});

export const { updateName, updateEmail, updateMessage, resetForm } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;

export const store = configureStore({
  reducer: {
    contactForm: contactFormSlice.reducer,
  },
});
