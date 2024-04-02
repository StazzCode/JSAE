let currentGames = [];

async function createNewGame(req, res) {
	const { gameName, gameType, maxPlayers, maxRounds } = req.body;
	const newGame = await Game.create({
		gameName,
		gameType,
		maxPlayers,
		maxRounds,
	}).fetch();
	return res.json(newGame);
}

async function findAllGames(req, res) {
	const allGames = await Game.find();
	return res.json(allGames);
}

module.exports = {
	createNewGame,
	findAllGames,
};
