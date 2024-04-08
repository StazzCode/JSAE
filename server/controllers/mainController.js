import { getScores } from '../models/Scores.js';

export async function login(req, res) {
	res.status(501).send('Not Implemented');
}

export async function register(req, res) {
	res.status(501).send('Not Implemented');
}

export async function logout(req, res) {
	res.status(501).send('Not Implemented');
}

export async function getTopScores(req, res) {
	const scores = getScores();
	scores.sort((a, b) => b.score - a.score);
	const topScores = scores.slice(0, 10);
	return res.json(topScores);
}
