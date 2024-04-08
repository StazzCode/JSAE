let allGames = [];
import { v4 as uuidv4 } from 'uuid';

export default class Game {
	constructor() {
		this.id = uuidv4();
		this.players = {};
		this.maxPlayers = 4;
		this.name = 'New Game';
		this.element = {};

		allGames.push(this);
		console.log('Created new game with id', this.id);
	}

	addPlayer(player, owner = false) {
		if (Object.keys(this.players).length >= this.maxPlayers) {
			console.log(
				`Cannot add player ${player.id} to game ${this.id}, game is full`
			);
			return false;
		}

		this.players[player.id] = player;
		console.log(`Added player ${player.id} to game ${this.id}`);
	}
}

Game.allGames = allGames;
Game.findById = id => {
	return allGames.find(game => game.id === id);
};
