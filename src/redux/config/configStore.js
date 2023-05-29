import { configureStore } from "@reduxjs/toolkit";
import searchRequire from "../modules/userSearchSlice";

const store = configureStore({
  reducer: { searchRequire: searchRequire },
});

export default store;
