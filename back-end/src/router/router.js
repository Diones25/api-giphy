const { Router } = require('express');
const giphyController = require('../controllers/giphyController.js');
const stickersController = require('../controllers/stickersController.js');

const router = Router();

router.get('/gifs/trending', giphyController.getTrendingGifs);
router.get('/stickers/trending', stickersController.getTrendingStickers);
router.get('/gifs/search', giphyController.getGifSearch);
router.get('/stickers/search', stickersController.getStickersSearch);

module.exports = router;