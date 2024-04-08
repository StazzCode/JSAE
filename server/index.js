import express from 'express';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';
import logger from './middlewares/logger.js';
import * as fs from 'fs';
import mainRoutes from './routes/mainRoutes.js';
import apiRoutes from './routes/apiRoutes.js';
import bodyParser from 'body-parser';
import gamesRoutes from './routes/gamesRoutes.js';
import * as http from 'node:http';
import { Server } from 'socket.io';

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
app.use('/games', gamesRoutes);

// 404
app.use((req, res) => {
	res.status(404).send('404');
});

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', socket => {
	console.log(`Client ${socket.id} connecté`);

	// const player = new Player(0, 0, 200, 200, 'img/player.png', socket.id);
	// game.addPlayer(player);
	// socket.send(game.getAllPlayersData());
	//
	// socket.on('message', message => {
	// 	console.log(`Client ${socket.id} dit : ${message}`);
	// 	switch (message) {
	// 		case 'up':
	// 			player.startMovingUp();
	// 			break;
	// 		case 'left':
	// 			player.startMovingLeft();
	// 			break;
	// 		case 'right':
	// 			player.startMovingRight();
	// 			break;
	// 		case 'down':
	// 			player.stopMovingDown();
	// 			break;
	// 		case 'stop':
	// 			player.stopMovingDown();
	// 			player.stopMovingUp();
	// 			player.stopMovingLeft();
	// 			player.stopMovingRight();
	// 			break;
	// 	}
	// 	console.log(player.position);
	// 	socket.send(game.getAllPlayersData());
	// });

	socket.on('disconnect', () => {
		console.log(`Client ${socket.id} déconnecté`);
	});
});

// Start server
const PORT = process.env.APP_PORT || 3000;
httpServer.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
