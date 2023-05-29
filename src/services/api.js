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

async function fetchSuperheroById(id) {
    const responce = await apiInstance.get(`/api/superheroes/${id}`);
    
    const { superhero } = responce.data;

    return superhero;
}

const api = {
    fetchSuperheroes,
    fetchSuperheroById,
};

export default api;