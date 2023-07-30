import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import contactReducer from "./reducers/contactReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactReducer,
  },
});

export default store;
