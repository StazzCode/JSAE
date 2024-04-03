import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';
import logger from './middlewares/logger.js';
import bodyParser from 'body-parser';
import * as fs from 'fs';

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

io.on('connection', socket => {
	console.log(`Client ${socket.id} connecté`);

	socket.on('message', message => {
		console.log(`Client ${socket.id} dit : ${message}`);
	});

	socket.on('disconnect', () => {
		console.log(`Client ${socket.id} déconnecté`);
	});
});

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});

