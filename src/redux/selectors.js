import { createSelector } from "@reduxjs/toolkit"; 

export const selectSuperheroes = state => state.superheroes.items;

// export const selectSuperheroDetails = state => state.superheroes.itemDetails;

export const selectIsLoading = state => state.superheroes.isLoading;

export const selectError = state => state.superheroes.error;

export const selectPage = state => state.pagination;

export const selectTotalPages = createSelector(
    [selectSuperheroes],
    ({ total, per_page }) => {
        const totalPages = Math.ceil(total / per_page);
        console.log(totalPages, "total pages");

        return totalPages;
});
