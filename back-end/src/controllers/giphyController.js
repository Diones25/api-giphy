const api = require('../service/api.js');

const getTrendingGifs = async (req, res) => {
    await api.get("/gifs/trending").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Gifs não encontrado!" });
    });
}

const getGifSearch = async (req, res) => {
    const q = req.query["q"];

    await api.get(`/gifs/search?q=${q}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Gifs não encontrado!" });
    });
}

module.exports = {
    getGifSearch,
    getTrendingGifs    
}