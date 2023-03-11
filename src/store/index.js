import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./character/slice";

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export default store;
