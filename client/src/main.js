// when socket io connected get id sand set userSocketID to it

import { io } from 'socket.io-client';

const socket = io();
socket.on('connect', () => {
	console.log(`connecté au serveur avec l'id ${socket.id}`);
});

const canvas = document.querySelector('.gameCanvas');
const context = canvas.getContext('2d');

document.addEventListener('keydown', event => {
    switch (event.key) {
        case "z":
			socket.send('up');
            break;
        case "q":
			socket.send('left');
            break;
        case "s":
			socket.send('down');
            break;
        case "d":
			socket.send('right');
            break;
    }
})

function resampleCanvas() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
}

const canvasResizeObserver = new ResizeObserver(() => resampleCanvas());
canvasResizeObserver.observe(canvas);