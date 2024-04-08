import Player from './Player.js';
import { v4 as uuidv4 } from 'uuid';

let allGames = [];

export default class Game {
	constructor(name) {
		this.id = uuidv4();
		this.players = {};
		this.maxPlayers = 4;
		this.name = name;
		this.element = {};
		this.difficulty = 'Normal';
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
}

export function getAllGames() {
	return allGames;
}

// test create game
const game = new Game('Test Game');
// create 3 players
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
const player3 = new Player('Player 3');
// add players to game
game.addPlayer(player1);
game.addPlayer(player2);
game.addPlayer(player3);
