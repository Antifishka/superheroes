import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://6437cc410c58d3b145798156.mockapi.io/api',
});

async function fetchUsers() {
    const response = await apiInstance.get('/users');
     
    const users = response.data;

    if (!users.length) {
        throw new Error(`Sorry, there are no users.`)
    }

    return users;
};

const api = {
    fetchUsers,
};

export default api;