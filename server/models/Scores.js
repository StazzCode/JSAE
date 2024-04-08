import { readFileSync, writeFileSync } from 'fs';

export default class Map {
	constructor(player, game) {
		this.playerName = player.name;
		this.kills = game.players[player.id].kills;
		this.difficulty = game.difficulty;
		this.time = game.time;
		this.players = game.players.length;
	}

	getScore() {
		return (
			((this.kills * 10 + this.time * 10) * this.difficulty) / this.players
		);
	}

	saveScore() {
		const scores = JSON.parse(readFileSync('./server/data/scores.json'));
		scores.push({
			playerName: this.playerName,
			score: this.getScore(),
		});
		writeFileSync('./server/data/scores.json', JSON.stringify(scores));
	}
}

export function getScores() {
	return JSON.parse(readFileSync('./server/data/scores.json'));
}
