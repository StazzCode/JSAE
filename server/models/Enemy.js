import BaseEntity from './BaseEntity.js';

export default class Enemy extends BaseEntity{
    
    constructor(x, y, width, height, color, sprite, distance = false) {
        super(x,y,width,height,color);
        this.sprite = sprite;
        this.distance = distance;

        this.refreshRate = 50;

        this.incrementInterval = setInterval( () => {
            if(this.isMovingLeft) this.incrementLeft();
            if(this.isMovingRight) this.incrementRight();
            if(this.isMovingUp) this.incrementUp();
            if(this.isMovingDown) this.incrementDown();
        },this.refreshRate);
        this.decrementInterval = setInterval( () => {
            if(!this.isMovingLeft) this.decrementLeft();
            if(!this.isMovingRight) this.decrementRight();
            if(!this.isMovingUp) this.decrementUp();
            if(!this.isMovingDown) this.decrementDown();
        },this.refreshRate);
        
        this.updatePositionInterval = setInterval( () => {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        },this.refreshRate);

    }

    getSprite(){
        return this.sprite;
    }

    /*
     ---- DEPLACEMENT GAUCHE ---- 
    */

    startMovingLeft(){
        this.isMovingLeft = true;
    }

    stopMovingLeft(){
        this.isMovingLeft = false;
    }

    incrementLeft(){
        if(this.velocity.x > -this.maxVelocity)
            this.velocity.x += -this.acceleration;
    }

    decrementLeft(){
        if(this.velocity.x < 0){
            this.velocity.x += this.friction;
        }else{
            this.velocity.x = 0;
        }
    }

    /*
     ---- DEPLACEMENT DROITE ---- 
    */

    startMovingRight(){
        this.isMovingRight = true;
    }

    stopMovingRight(){
        this.isMovingRight = false;
    }

    incrementRight(){
        if(this.velocity.x < this.maxVelocity)
            this.velocity.x += this.acceleration;
    }

    decrementRight(){
        if(this.velocity.x > 0){
            this.velocity.x += -this.friction;
        }else{
            this.velocity.x = 0;
        }
    }

    /*
     ---- DEPLACEMENT HAUT ---- 
    */

    startMovingUp(){
        this.isMovingUp = true;
    }

    stopMovingUp(){
        this.isMovingUp = false;
    }

    incrementUp(){
        if(this.velocity.y < this.maxVelocity)
            this.velocity.y += this.acceleration;
    }

    decrementUp(){
        if(this.velocity.y > 0){
            this.velocity.y += -this.friction;
        }else{
            this.velocity.y = 0;
        }
    }

    /*
     ---- DEPLACEMENT BAS ---- 
    */

    startMovingDown(){
        this.isMovingDown = true;
    }

    stopMovingDown(){
        this.isMovingDown = false;
    }

    incrementDown(){
        if(this.velocity.y > -this.maxVelocity)
            this.velocity.y += -this.acceleration;
    }

    decrementDown(){
        if(this.velocity.y < 0){
            this.velocity.y += this.friction;
        }else{
            this.velocity.y = 0;
        }
    }

    /*
    ---- Suivi d'un joueur ----
    */

    setFollowing(player){
        this.followingInterval = setInterval( () => {
            const playerX = this.distance ? player.position.x + 100 : player.position.x;
            const playerY = player.position.y;
            const enemyX = this.position.x;
            const enemyY = this.position.y;

            if(!this.isMovingLeft && playerX<enemyX) this.startMovingLeft();
            if(this.isMovingLeft && playerX>=enemyX) this.stopMovingLeft();

            if(!this.isMovingRight && playerX>enemyX) this.startMovingRight();
            if(this.isMovingRight && playerX<=enemyX) this.stopMovingRight();

            if(!this.isMovingUp && playerY>enemyY) this.startMovingUp();
            if(this.isMovingUp && playerY<=enemyY) this.stopMovingUp();

            if(!this.isMovingDown && playerY<enemyY) this.startMovingDown();
            if(this.isMovingDown && playerY>=enemyY) this.stopMovingDown();

        },this.refreshRate)
    }

    removeFollowing(){
        this.followingInterval = null;
    }

}