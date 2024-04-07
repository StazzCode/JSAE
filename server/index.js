import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';
import logger from './middlewares/logger.js';
import bodyParser from 'body-parser';
import * as fs from 'fs';
import Game from './models/Game.js';
import Player from './models/Player.js';

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

// 404
app.use((req, res) => {
	res.status(404).send('404');
});

// Socket.io
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const game = new Game();

io.on('connection', socket => {
	console.log(`Client ${socket.id} connecté`);

	game.setOnUpdate( () => {
		socket.send(game.getAllPlayersData());
	})

	const player = new Player(0, 0, 200, 200, 'img/player.png', socket.id);
	game.addPlayer(player);
	socket.send(game.getAllPlayersData());

	socket.on('message', message => {
		console.log(`Client ${socket.id} dit : ${message}`);
		switch (message) {
			case 'startUp':
				player.startMovingUp();
				break;
			case 'startLeft':
				player.startMovingLeft();
				break;
			case 'startRight':
				player.startMovingRight();
				break;
			case 'startDown':
				player.startMovingDown();
				break;
			case 'stopUp':
				player.stopMovingUp();
				break;
			case 'stopLeft':
				player.stopMovingLeft();
				break;
			case 'stopRight':
				player.stopMovingRight();
				break;
			case 'stopDown':
				player.stopMovingDown();
				break;
		}
		console.log(player.velocity);
	});

	socket.on('disconnect', () => {
		console.log(`Client ${socket.id} déconnecté`);
		game.removePlayer(player);
	});
});

// Start server
const PORT = process.env.APP_PORT || 3000;
httpServer.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
