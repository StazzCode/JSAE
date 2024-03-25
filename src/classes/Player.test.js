import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Player from './Player.js';

const sleep = ms => new Promise(r => setTimeout(r, ms));

describe('Player', () => {
	it('should have a width and height of 64 pixels', () => {
		const player = new Player(0, 0, 64, 64);
		assert.deepStrictEqual(player.width, 64);
		assert.deepStrictEqual(player.heigth, 64);
	});

	it('should be positioned at coordinates 0,0', () => {
		const player = new Player(0, 0, 64, 64);
		assert.deepStrictEqual(player.getX(), 0);
		assert.deepStrictEqual(player.getY(), 0);
	});

	it('should move to the right', async () => {
		const player = new Player(0, 0, 64, 64);
		player.velocity.x = 1;
		await sleep(2000);
		player.update();
		assertTrue(player.getX > 0);
	});

	it('should move to the left', async () => {
		const player = new Player(100, 0, 64, 64);
		player.velocity.x = -1;
		await sleep(2000);
		player.update();
		assertTrue(player.getX < 100);
	});

	it('should move upward', async () => {
		const player = new Player(0, 100, 64, 64);
		player.velocity.y = -1;
		await sleep(2000);
		player.update();
		assertTrue(player.getY < 100);
	});

	it('should move downward', async () => {
		const player = new Player(0, 0, 64, 64);
		player.velocity.y = 1;
		await sleep(2000);
		player.update();
		assertTrue(player.getY > 0);
	});
});
