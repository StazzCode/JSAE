import Game, { getAllGames } from '../models/Game.js';

export async function createNewGame(req, res) {
	const { name, difficulty, maxPlayers } = req.body;

	let allowedDifficulties = ['Easy', 'Normal', 'Hard'];
	if (
		!name ||
		!difficulty ||
		!maxPlayers ||
		maxPlayers < 1 ||
		!allowedDifficulties.includes(difficulty)
	) {
		return res.status(400).json({ error: 'Invalid request' });
	}

	const game = await new Game(name, maxPlayers, difficulty);

	return res.json(game);
}

export async function findAllGames(req, res) {
	return res.json(getAllGames());
}
