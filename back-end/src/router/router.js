const { Router } = require('express');
const giphyController = require('../controllers/giphyController.js');
const stickersController = require('../controllers/stickersController.js');

const router = Router();

router.get('/gifs/search', giphyController.getGifSearch);
router.get('/gifs/trending', giphyController.getTrendingGifs);
router.get('/stickers/search', stickersController.getStickersSearch);
router.get('/stickers/trending', stickersController.getTrendingStickers);

module.exports = router;