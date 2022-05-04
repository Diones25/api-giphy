const api = require('../service/api.js');

const getTrendingStickers = async (req, res) => {
    await api.get("/stickers/trending").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Gifs não encontrado!" });
    });
}

const getStickersSearch = async (req, res) => {
    await api.get('/stickers/search').then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Stickers não encontrado!" });
    });
}

module.exports = {
    getStickersSearch,
    getTrendingStickers
}