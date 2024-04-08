import { v4 as uuidv4 } from 'uuid';

let allGames = [];

export default class Game {
	constructor(name = 'New Game', maxPlayers = 4, difficulty = 'Normal') {
		this.id = uuidv4();
		this.players = {};
		this.maxPlayers = maxPlayers;
		this.name = name;
		this.element = {};
		this.difficulty = difficulty;
		this.createdAt = new Date();

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

	removePlayer(player) {
		delete this.players[player.id];
		console.log(`Removed player ${player.id} from game ${this.id}`);
		if (Object.keys(this.players).length === 0) {
			allGames = allGames.filter(game => game.id !== this.id);
			console.log(`Removed game ${this.id}`);
		}
	}
}

export function getAllGames() {
	return allGames;
}

export function findGameById(id) {
	return allGames.find(game => game.id === id);
}

export function findGameByPlayerId(playerId) {
	return allGames.find(game => game.players[playerId]);
}
