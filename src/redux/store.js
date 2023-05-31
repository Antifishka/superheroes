import { configureStore } from "@reduxjs/toolkit";
import { superheroesReducer } from "./superheroesSlice";
import { paginationReducer } from "./paginationSlice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesReducer,
    pagination: paginationReducer,
  },
});