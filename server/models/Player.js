import BaseEntity from './BaseEntity.js';
import { v4 as uuidv4 } from 'uuid';

let allPlayers = [];

export default class Player extends BaseEntity {
	constructor(name) {
		super(0, 0, 200, 200, 'img/player.png');
		this.name = '';
		this.score = 0;
		this.sprite = 'img/player.png';
		this.id = uuidv4();
	}

	update() {
		this.move();
	}

	move() {
		this.position.x = this.position.x + this.velocity.x * this.acceleration;
		this.position.y = this.position.y + this.velocity.y * this.acceleration;
	}

	getX() {
		return this.position.x;
	}

	getY() {
		return this.position.y;
	}

	getWidth() {
		return this.size.width;
	}

	getHeight() {
		return this.size.height;
	}
}
