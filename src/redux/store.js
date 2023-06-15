import { configureStore } from "@reduxjs/toolkit";
import { superheroesReducer } from "./slice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesReducer,
  },
});