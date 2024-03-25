import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Player from './Map.js';

describe('Map', () => {
	it('should have a top border at 500px'),
		() => {
			const map = new Map(500, 700);
			assert.deepStrictEqual(map.getTopBorder(), 500);
		};

	it('should have a bottom border at 700px'),
		() => {
			const map = new Map(500, 700);
			assert.deepStrictEqual(map.getBottomBorder(), 700);
		};
});
