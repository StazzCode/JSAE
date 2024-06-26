// when socket io connected get id sand set userSocketID to it

import { io } from 'socket.io-client';

const canvas = document.querySelector('.gameCanvas');
const context = canvas.getContext('2d');

document.addEventListener('keydown', event => {
	switch (event.key) {
		case 'z':
			socket.send('startUp');
			break;
		case 'q':
			socket.send('startLeft');
			break;
		case 's':
			socket.send('startDown');
			break;
		case 'd':
			socket.send('startRight');
			break;
	}
});

document.addEventListener('keyup',event => {
	switch (event.key) {
		case 'z':
			socket.send('stopUp');
			break;
		case 'q':
			socket.send('stopLeft');
			break;
		case 's':
			socket.send('stopDown');
			break;
		case 'd':
			socket.send('stopRight');
			break;
	}
})

function resampleCanvas() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
}

const canvasResizeObserver = new ResizeObserver(() => resampleCanvas());
canvasResizeObserver.observe(canvas);

function render(players) {
	context.clearRect(0, 0, canvas.width, canvas.height);

	players.forEach(player => {
		const image = new Image();
		image.src = player.sprite;
		const imageSize = player.size;
		image.addEventListener('load', event => {
			context.drawImage(image, player.position.x, player.position.y, imageSize.width, imageSize.height);
		});
	})
	context.stroke();
}

const socket = io();
socket.on('connect', () => {
	console.log(`connecté au serveur avec l'id ${socket.id}`);

	socket.on('message', message => {
		render(message);
	})
});

const buttons = document.querySelectorAll('.mainButton');

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
