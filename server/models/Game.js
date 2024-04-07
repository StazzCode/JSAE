let allGames = [];
import { v4 as uuidv4 } from 'uuid';

export default class Game {
	constructor() {
		this.id = uuidv4();
		this.players = [];
		this.maxPlayers = 4;
		this.name = 'New Game';
		this.owner = null;

		allGames.push(this);
		console.log('Created new game with id', this.id);
	}

	addPlayer(player, owner = false) {
		if (Object.keys(this.players).length >= this.maxPlayers) {
			return false;
		}

		this.players[player.id] = player;
		if (owner) this.owner = player;
	}

	findPlayer(id) {
		return this.players.find(player => player.id === id);
	}
}

Game.allGames = allGames;
