import Game from '../models/Game.js';

export async function createNewGame(req, res) {
	const { gameName } = req.body;

	if (!gameName) {
		return res.status(400).json({ error: 'Missing player name' });
	}

	const game = await new Game(gameName);

	return res.json(game);
}

export async function findAllGames(req, res) {
	return res.json(Game.allGames);
}
