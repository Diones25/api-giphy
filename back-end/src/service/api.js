const axios = require('axios');

const baseURL = "https://api.giphy.com/v1";
const api_key = "GDt70km6IlESIWUxUiS8xGoy56h2QIOU";
const q = "susto"; //Esse parâmetro é que diz qual tipo de gif deve aparecer que desse caso é "susto"
const limit = 25;
const offset = 5;
const rating = "g"
const lan = "pt";

const api = axios.create({
    baseURL: baseURL,
    params: {
        api_key: api_key,
        //q: q,
        limit: limit,
        offset: offset,
        rating: rating,
        lan: lan
    }
});

module.exports = api;