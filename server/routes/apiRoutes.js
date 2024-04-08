import express from 'express';

import {
	createNewGame,
	findAllGames,
} from '../controllers/gamesControllers.js';

import { getTopScores } from '../controllers/mainController.js';

const router = express.Router();

router.get('/games', findAllGames);
router.post('/games', createNewGame);
router.get('/scores', getTopScores);

export default router;
