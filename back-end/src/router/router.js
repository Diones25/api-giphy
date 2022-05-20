import { Router } from 'express';
import giphyController from '../controllers/giphyController.js';
import stickersController from '../controllers/stickersController.js';

const router = Router();

router.get('/gifs/search', giphyController.getGifSearch);
router.get('/gifs/trending', giphyController.getTrendingGifs);
router.get('/stickers/search', stickersController.getStickersSearch);
router.get('/stickers/trending', stickersController.getTrendingStickers);

export default router;