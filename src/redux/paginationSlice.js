import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        setPage(state, action) {
            return action.payload;
        },
    },
});

export const { setPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;