const api = require('../service/api.js');

const getGifSearch = async (req, res) => {
    await api.get("/gifs/search").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Gifs não encontrado!" });
    });
}

const getStickersSearc = async (req, res) => {
    await api.get('/stickers/search').then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Stickers não encontrado!" });
    });
}

module.exports = {
    getGifSearch,
    getStickersSearc
}