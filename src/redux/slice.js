import { createSlice } from "@reduxjs/toolkit";
import {
    fetchSuperheroes,
    fetchSuperheroById,
    addSuperhero,
    deleteSuperhero,
    updateSuperhero
} from "./operations";

const superheroesSlice = createSlice({
    name: "superheroes",
    initialState: {
        superheroes: [],
        superheroDetails: {},
        perPage: 1,
        total: 1,
        page: 1,
        isLoading: false,
        error: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuperheroes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSuperheroes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.superheroes = action.payload.superheroes;
                state.perPage = action.payload.per_page;
                state.total = action.payload.total;
            })
            .addCase(fetchSuperheroes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchSuperheroById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSuperheroById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.superheroDetails = action.payload;
            })
            .addCase(fetchSuperheroById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addSuperhero.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addSuperhero.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.superheroes.unshift(action.payload);
                state.superheroDetails = action.payload;
            })
            .addCase(addSuperhero.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteSuperhero.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteSuperhero.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.superheroes.findIndex(
                    (superhero) => superhero._id === action.payload
                );
                state.superheroes.splice(index, 1);
            })
            .addCase(deleteSuperhero.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateSuperhero.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateSuperhero.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.superheroes.findIndex(
                    (superhero) => superhero._id === action.payload.id
                );
                state.superheroes.splice(index, 1, action.payload);
                state.superheroDetails = { ...action.payload };
            })
            .addCase(updateSuperhero.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setPage } = superheroesSlice.actions;

export const superheroesReducer = superheroesSlice.reducer;