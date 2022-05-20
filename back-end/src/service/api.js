import axios from 'axios';

const baseURL = "https://api.giphy.com/v1";
const api_key = "";
const limit = 25;
const offset = 5;
const rating = "g"
const lan = "pt";

const api = axios.create({
    baseURL: baseURL,
    params: {
        api_key: api_key,
        limit: limit,
        offset: offset,
        rating: rating,
        lan: lan
    }
});

export default api;