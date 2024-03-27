// when socket io connected get id sand set userSocketID to it

import { io } from 'socket.io-client';

const socket = io();
socket.on('connect', () => {
	console.log(`connecté au serveur avec l'id ${socket.id}`);
	document.getElementById('userSocketID').innerText = socket.id;
});
