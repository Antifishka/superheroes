import { createSlice } from "@reduxjs/toolkit";
import {
    fetchSuperheroes,
    fetchSuperheroById,
    addSuperhero,
    deleteSuperhero,
    updateSuperhero
} from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const superheroesSlice = createSlice({
    name: "superheroes",
    initialState: {
        superheroes: [],
        superheroDetails: {},
        perPage: 1,
        total: 1,
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchSuperheroes.pending]: handlePending,
        [fetchSuperheroes.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.superheroes = action.payload.superheroes;
            state.perPage = action.payload.per_page;
            state.total = action.payload.total;
        },
        [fetchSuperheroes.rejected]: handleRejected,
        [fetchSuperheroById.pending]: handlePending,
        [fetchSuperheroById.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.superheroDetails = action.payload;
        },
        [fetchSuperheroById.rejected]: handleRejected,
        [addSuperhero.pending]:handlePending,
        [addSuperhero.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.superheroes.unshift(action.payload);
            state.superheroDetails = action.payload;
        },
        [addSuperhero.rejected]: handleRejected,
        [deleteSuperhero.pending]: handlePending,
        [deleteSuperhero.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.superheroes.findIndex(superhero => superhero._id === action.payload);
            state.superheroes.splice(index, 1);
        },
        [deleteSuperhero.rejected]: handleRejected,
        [updateSuperhero.pending]: handlePending,
        [updateSuperhero.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            const index = state.superheroes.findIndex(superhero => superhero._id === action.payload.id);
            state.superheroes.splice(index, 1, action.payload);
            state.superheroDetails = {
                ...action.payload,
            }
        },
        [updateSuperhero.rejected]: handleRejected,
    },
});

export const superheroesReducer = superheroesSlice.reducer;