import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';
import logger from './middlewares/logger.js';
import bodyParser from 'body-parser';

const app = express();

// Middlewares
addWebpackMiddleware(app);
app.use(logger);
app.use(bodyParser.json());

// Static files
app.use(express.static('client/public'));

// Routes

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: './client/public/html' });
});

// Socket.io
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', socket => {
	console.log(`connecté au serveur avec l'id ${socket.id}`);

	socket.on('message', message => {
		console.log(`message reçu : ${message}`);
	});

	socket.on('disconnect', () => {
		console.log(`déconnecté du serveur avec l'id ${socket.id}`);
	});
});

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
