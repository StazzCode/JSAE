import { existsSync, readFileSync, writeFileSync } from 'fs';

export default class Scores {
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

	save() {
		const scores = getScores();
		scores.push({
			playerName: this.playerName,
			score: this.getScore(),
		});
		writeFileSync('./server/data/scores.json', JSON.stringify(scores));
	}
}

export function getScores() {
	if (!existsSync('./server/data/scores.json')) {
		writeFileSync('./server/data/scores.json', '[]');
		return [];
	}

	const rawData = readFileSync('./server/data/scores.json', 'utf8');
	try {
		return JSON.parse(rawData);
	} catch (error) {
		console.error('Error parsing JSON:', error);
		return [];
	}
}
