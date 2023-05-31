import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST_URL } from "constants/constants"

axios.defaults.baseURL = HOST_URL;

export const fetchSuperheroes = createAsyncThunk(
    "superheroes/fetchAll",
    async ( page = 1 , thunkAPI) => {
        try {
            const { data } = await axios.get(`/api/superheroes?page=${page}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchSuperheroById = createAsyncThunk(
    "superheroes/fetchById",
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`/api/superheroes/${id}`);
            
            return data.superhero;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteSuperhero = createAsyncThunk(
    "superheroes/deleteSuperhero",
    async (heroId, thunkAPI) => {
        try {
        const response = await axios.delete(`/contacts/${heroId}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);