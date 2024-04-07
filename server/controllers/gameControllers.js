import Game from '../models/Game.js';
import Player from '../models/Player.js';

export async function createNewGame(req, res) {
	const { playerName } = req.body;

	if (!playerName) {
		return res.status(400).json({ error: 'Missing player name' });
	}

	const game = await new Game();
	const player = await new Player(playerName);

	game.addPlayer(player, true);

	return res.json({
		gameID: game.id,
	});
}

export async function findAllGames(req, res) {
	return res.json({
		games: Game.allGames,
	});
}
