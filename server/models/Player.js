import BaseEntity from './BaseEntity.js';
import { v4 as uuidv4 } from 'uuid';

let allPlayers = [];

export default class Player extends BaseEntity {
	constructor(name, color, socketID) {
		super(name);
		this.name = name;
		this.socketID = socketID;
		this.x = 50;
		this.y = 200;
		this.width = 100;
		this.height = 100;
		this.color = color;
		this.score = 0;
		this.sprite = '/img/Player/test.png';
		this.id = uuidv4();
		this.health = 100;
		this.speed = 5;

		allPlayers.push(this);
		console.log('Created new player with id', this.id);
	}

	// update() {
	// 	this.move();
	// }
	//
	// move() {
	// 	this.position.x = this.position.x + this.velocity.x * this.acceleration;
	// 	this.position.y = this.position.y + this.velocity.y * this.acceleration;
	// }
	//
	// getX() {
	// 	return this.position.x;
	// }
	//
	// getY() {
	// 	return this.position.y;
	// }
	//
	// getWidth() {
	// 	return this.size.width;
	// }
	//
	// getHeight() {
	// 	return this.size.height;
	// }
}

export function findPlayerById(id) {
	return allPlayers.find(player => player.id === id);
}

export function findPlayerBySocketID(socketID) {
	return allPlayers.find(player => player.socketID === socketID);
}
