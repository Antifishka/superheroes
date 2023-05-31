import { createSlice } from "@reduxjs/toolkit";
import { fetchSuperheroes, fetchSuperheroById, addSuperhero, deleteSuperhero } from "./operations";

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
            state.superheroes = action.payload;
        },
        [fetchSuperheroById.rejected]: handleRejected,
        [addSuperhero.pending](state, _){
            state.isLoading = true;
        },
        [addSuperhero.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.superheroes.push(action.payload);
        },
        [addSuperhero.rejected]: handleRejected,
        [deleteSuperhero.pending]: handlePending,
        [deleteSuperhero.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            // const index = state.superheroes.findIndex(superhero => superhero._id === action.payload.id);
            // state.superheroes.splice(index, 1);
            const res = state.superheroes.filter(item => action.payload.id !== item._id);
            state.superheroes = res;
        },
        [deleteSuperhero.rejected]: handleRejected,
        // [updateContact.pending]: handlePending,
        // [updateContact.fulfilled](state, action){
        //     state.isLoading = false;
        //     state.error = null;
        //     const index = state.items.findIndex(contact => contact.id === action.payload.id);
        //     state.items.splice(index, 1, action.payload);
        // },
        // [updateContact.rejected]: handleRejected,
    },
});

export const superheroesReducer = superheroesSlice.reducer;