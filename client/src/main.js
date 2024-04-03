// when socket io connected get id sand set userSocketID to it

import { io } from 'socket.io-client';

const socket = io();
socket.on('connect', () => {
	console.log(`connecté au serveur avec l'id ${socket.id}`);
	document.getElementById('userSocketID').innerText = socket.id;
});

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
