import express from 'express';
import { createNewGame, findAllGames } from '../controllers/gameControllers.js';

const router = express.Router();

router.get('/games', findAllGames);
router.post('/games', createNewGame);

export default router;
