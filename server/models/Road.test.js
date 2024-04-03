import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Road from './Road.js';

describe('Road', () => {
	it('should have a top border at 500px'),
		() => {
			const Road = new Road(500, 700);
			assert.deepStrictEqual(road.getTopBorder(), 500);
		};

	it('should have a bottom border at 700px'),
		() => {
			const road = new Road(500, 700);
			assert.deepStrictEqual(road.getBottomBorder(), 700);
		};
});
