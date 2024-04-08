import express from 'express';
import { findGameById } from '../models/Game.js';

const router = express.Router();

router.get('/:id', (req, res) => {
	const game = findGameById(req.params.id);
	if (!game) {
		return res.redirect('/');
	}
	return res.sendFile('games.html', { root: './client/public' });
});

export default router;
