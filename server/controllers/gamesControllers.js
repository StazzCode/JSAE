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
		return res.status(400).json({ msg: 'Invalid request' });
	}

	const game = await new Game(name, difficulty, maxPlayers);

	return res.json(game);
}

export async function findAllGames(req, res) {
	return res.json(getAllGames());
}
