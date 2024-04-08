// import assert from 'node:assert/strict';
// import { describe, it } from 'node:test';
// import Player from './Player.js';
// import Road from './Road.js';
//
// const sleep = ms => new Promise(r => setTimeout(r, ms));
//
// describe('Player', () => {
// 	it('should have a width and height of 64 pixels', () => {
// 		const player = new Player(0, 0, 64, 64);
// 		assert.deepStrictEqual(player.getWidth(), 64);
// 		assert.deepStrictEqual(player.getHeight(), 64);
// 	});
//
// 	it('should be positioned at coordinates 0,0', () => {
// 		const player = new Player(0, 0, 64, 64);
// 		assert.equal(player.getX(), 0);
// 		assert.equal(player.getY(), 0);
// 	});
//
// 	it('should move to the right', () => {
// 		const player = new Player(0, 0, 64, 64);
// 		player.velocity.x = 1;
// 		player.move();
// 		assert.equal(player.getX() > 0, true);
// 	});
//
// 	it('should move to the left', () => {
// 		const player = new Player(100, 0, 64, 64);
// 		player.velocity.x = -1;
// 		player.move();
// 		assert.equal(player.getX() < 100, true);
// 	});
//
// 	it('should move upward', () => {
// 		const player = new Player(0, 100, 64, 64);
// 		player.velocity.y = -1;
// 		player.move();
// 		assert.equal(player.getY() < 100, true);
// 	});
//
// 	it('should move downward', () => {
// 		const player = new Player(0, 0, 64, 64);
// 		player.velocity.y = 1;
// 		player.move();
// 		assert.equal(player.getY() > 0, true);
// 	});
//
// 	it('should not move over road topborder', () => {
// 		const road = new Road(500, 700);
// 		const player = new Player(0, 600, 64, 64);
// 		player.velocity.y = -1;
// 		setInterval(player.move, 1000 / 60);
// 		console.log(player.getY());
// 		assert.equal(player.getY() <= road.getTopBorder(), false);
// 	});
//
// 	it('should not move over road bottomborder', () => {
// 		const road = new Road(500, 700);
// 		const player = new Player(0, 600, 64, 64);
// 		player.velocity.y = 1;
// 		setInterval(player.move, 1000 / 60);
// 		console.log(player.getY());
// 		assert.equal(player.getY() >= road.getBottomBorder(), false);
// 	});
// });
