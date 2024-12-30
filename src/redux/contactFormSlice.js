import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openForm: (state) => {
      state.isOpen = true;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openForm, closeForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
