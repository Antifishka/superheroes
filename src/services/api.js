import axios from "axios";
import { HOST_URL } from "constants/constants"

const apiInstance = axios.create({
    baseURL: HOST_URL,
});

async function fetchSuperheroes(page) {
    const { data } = await apiInstance.get(`/api/superheroes?page=${page}`);

    if (!data.superheroes.length) {
        throw new Error(`Sorry, there are no superheroes.`)
    }

    return data;
};

const api = {
    fetchSuperheroes,
};

export default api;