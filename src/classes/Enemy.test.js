import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Enemy from './Enemy.js';

describe('Init enemy', () => {
    it('can get sprite', () => {
        const enemy = new Enemy(0,0,0,0,'red','test');
        assert.strictEqual('test', enemy.getSprite());
    })
});

describe('Moving left', () => { 
    it('start moving left', () => {
        const enemy = new Enemy(0,0,0,0,'red','test');
        enemy.startMovingLeft();
        assert(enemy.velocity.x < 0);
    })
});