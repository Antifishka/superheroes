import { createSelector } from "@reduxjs/toolkit";

export const selectSuperheroes = state => state.superheroes.superheroes;

export const selectSuperheroDetails = state => state.superheroes.superheroDetails;

export const selectPerPage = state => state.superheroes.perPage;

export const selectTotal = state => state.superheroes.total;

export const selectIsLoading = state => state.superheroes.isLoading;

export const selectError = state => state.superheroes.error;

export const selectPage = state => state.superheroes.page;

export const selectTotalPages = createSelector(
    [selectPerPage, selectTotal],
    (perPage, total) => {
        const totalPages = Math.ceil(total / perPage);

        return totalPages;
    }
);
