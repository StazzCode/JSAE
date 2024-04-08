import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';
import logger from './middlewares/logger.js';
import bodyParser from 'body-parser';
import * as fs from 'fs';
import mainRoutes from './routes/mainRoutes.js';
import apiRoutes from './routes/apiRoutes.js';
import gameRoutes from './routes/gamesRoutes.js';
import { findGameById, findGameByPlayerId } from './models/Game.js';
import Player, { findPlayerBySocketID } from './models/Player.js';

const app = express();

// Middlewares
addWebpackMiddleware(app);
app.use(logger);
app.use(bodyParser.json());

// Static files
app.use(express.static('client/public'));

app.get('/*', (req, res, next) => {
	if (fs.existsSync(`./client/public${req.url}`)) {
		return res.sendFile(`./client/public${req.url}`, { root: '.' });
	} else if (fs.existsSync(`./client/public${req.url}.html`)) {
		return res.sendFile(`./client/public${req.url}.html`, { root: '.' });
	}
	next();
});

app.use('/', mainRoutes);
app.use('/api', apiRoutes);
app.use('/games', gameRoutes);

// 404
app.use((req, res) => {
	res.status(404).send('404');
});

// Socket.io
const httpServer = http.createServer(app);
const io = new Server(httpServer);

let socketList = {};

io.on('connection', socket => {
	console.log(`Client ${socket.id} has connected`);
	socketList[socket.id] = socket;

	socket.on('playerInfo', playerInfo => {
		console.log('Player info received', playerInfo);
		const game = findGameById(playerInfo.gameID);
		if (!game) {
			console.log('Game not found');
			return;
		}
		socketList[socket.id].gameID = playerInfo.gameID;
		const player = new Player(
			playerInfo.pseudo || `Player ${Object.keys(game.players).length + 1}`,
			playerInfo.color ||
				`#${Math.floor(Math.random() * 16777215).toString(16)}`,
			socket.id
		);
		game.addPlayer(player);
	});

	socket.on('playerMove', playerMove => {
		console.log('Player move received', playerMove);
		const player = findPlayerBySocketID(socket.id);
		if (!player) {
			console.log('Player not found');
			return;
		}
		player.x = playerMove.x;
		player.y = playerMove.y;
	});

	socket.on('playerFire', playerFire => {
		console.log('Player fire received', playerFire);
		const player = findPlayerBySocketID(socket.id);
		if (!player) {
			console.log('Player not found');
			return;
		}
		player.fire = playerFire;
	});

	socket.on('disconnect', () => {
		console.log(`Client ${socket.id} has disconnected`);
		delete socketList[socket.id];
		const player = findPlayerBySocketID(socket.id);
		console.log(player);
		if (!player) {
			console.log('Player not found');
			return;
		}
		const game = findGameByPlayerId(player.id);
		console.log(game);
		if (!game) {
			console.log('Game not found');
			return;
		}
		game.removePlayer(player);
	});
});

let tick = 10;
setInterval(() => {
	for (const socketID in socketList) {
		socketList[socketID].emit(
			'games',
			findGameById(socketList[socketID].gameID)
		);
	}
}, 1000 / tick);

// Start server
const PORT = process.env.APP_PORT || 3000;
httpServer.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
