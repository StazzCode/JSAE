import express from 'express';
import gameControllers from '../controllers/gameControllers.js';

const router = express.Router();

router.get('/games', gameControllers.findAllGames);
router.post('/games', gameControllers.createNewGame);

export default router;
