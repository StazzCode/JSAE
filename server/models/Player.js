import BaseEntity from './BaseEntity.js';

let allPlayers = [];
let playerID = 0;

class Player extends BaseEntity {
	constructor() {
		super();
		this.id = playerID++;
		this.name = '';
		this.score = 0;
	}
}
