import api from '../service/api.js';

const getTrendingStickers = async (req, res) => {
    await api.get("/stickers/trending").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Gifs não encontrado!" });
    });
}

const getStickersSearch = async (req, res) => {
    const q = req.query["q"];

    await api.get('/stickers/search?q=${q}').then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Stickers não encontrado!" });
    });
}

export default {
    getStickersSearch,
    getTrendingStickers
}