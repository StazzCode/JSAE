import BaseEntity from './BaseEntity.js';

export default class Enemy extends BaseEntity{
    
    constructor(x, y, width, height, color, sprite, distance = false) {
        super(x,y,width,height,color);
        this.sprite = sprite;
        this.distance = distance;
    }

    getSprite(){
        return this.sprite;
    }

    /*
    ---- Suivi d'un joueur ----
    */

    setFollowing(player){
        this.followingInterval = setInterval( () => {
            const playerX = this.distance ? player.position.x + 400 : player.position.x;
            const playerY = player.position.y;
            const enemyX = this.position.x;
            const enemyY = this.position.y;

            if(!this.isMovingLeft && playerX<enemyX) this.startMovingLeft();
            if(this.isMovingLeft && playerX>=enemyX) this.stopMovingLeft();

            if(!this.isMovingRight && playerX>enemyX) this.startMovingRight();
            if(this.isMovingRight && playerX<=enemyX) this.stopMovingRight();

            if(!this.isMovingUp && playerY<enemyY) this.startMovingUp();
            if(this.isMovingUp && playerY>=enemyY) this.stopMovingUp();

            if(!this.isMovingDown && playerY>enemyY) this.startMovingDown();
            if(this.isMovingDown && playerY<=enemyY) this.stopMovingDown();
        },this.refreshRate)
    }

    removeFollowing(){
        this.followingInterval = null;
    }

}