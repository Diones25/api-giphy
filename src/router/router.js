const { Router } = require('express');
const giphyController = require('../controllers/giphyController.js');

const router = Router();

router.get('/gifs/search', giphyController.getGifSearch);
router.get('/stickers/search', giphyController.getStickersSearc);

module.exports = router;