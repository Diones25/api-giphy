const api = require('../service/api.js');

const getGifSearch = async (req, res) => {
    await api.get("/gifs/search").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);
    });
}

const getStickersSearc = async (req, res) => {
    await api.get('/stickers/search').then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);
    });
}

module.exports = {
    getGifSearch,
    getStickersSearc
}