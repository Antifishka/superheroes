import { configureStore } from "@reduxjs/toolkit";
import { superheroesReducer } from "./superheroesSlice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesReducer,
  },
});