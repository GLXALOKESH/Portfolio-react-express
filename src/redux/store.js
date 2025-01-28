import { configureStore } from "@reduxjs/toolkit";
import contactFormReducer from "./contactFormSlice";

const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
  },
});

export default store;
