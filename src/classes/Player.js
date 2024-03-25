import BaseEntity from './BaseEntity.js';
export default class Player extends BaseEntity {
	constructor(x, y, width, height) {
		super(x, y, width, height);
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
