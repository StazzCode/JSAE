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
const buttons = document.querySelectorAll('.mainButton');
console.log(buttons);

buttons.forEach(button => {
	button.addEventListener('mouseover', event => {
		button.querySelector(`.base`).setAttribute('hidden', '');
		button.querySelector(`.hover`).removeAttribute('hidden');
	});
	button.addEventListener('mouseout', event => {
		button.querySelector(`.hover`).setAttribute('hidden', '');
		button.querySelector(`.base`).removeAttribute('hidden');
	});
});
