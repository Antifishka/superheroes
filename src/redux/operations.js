import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_HOST_URL;

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

export const addSuperhero = createAsyncThunk(
    "superheroes/addSuperhero",
    async (superhero, thunkAPI) => {
        try {
            const response = await axios.post("/api/superheroes", superhero, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteSuperhero = createAsyncThunk(
    "superheroes/deleteSuperhero",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/api/superheroes/${id}`);
            
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateSuperhero = createAsyncThunk(
    'superheroes/updateSuperhero',
    async ({ formData, heroId }, thunkAPI) => {
        try {
            const response = await axios.patch(`/api/superheroes/${heroId}`,
                formData,
                { headers: {
                    'Content-Type': 'multipart/form-data',
                    }
                }
            );

            const { updatedHero } = response.data;
        
            return updatedHero;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
  }
);