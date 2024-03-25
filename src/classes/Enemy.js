import BaseEntity from './BaseEntity.js';

export default class Enemy extends BaseEntity{
    
    constructor(x, y, width, height, color, sprite) {
        super(x,y,width,height,color);
        this.sprite = sprite;

        const refreshRate = 50;
        this.incrementInterval = setInterval( () => {
            if(this.isMovingLeft) this.incrementLeft();
            if(this.isMovingRight) this.incrementRight();
            if(this.isMovingUp) this.incrementUp();
            if(this.isMovingDown) this.incrementDown();
        },refreshRate);
        this.decrementInterval = setInterval( () => {
            if(!this.isMovingLeft) this.decrementLeft();
            if(!this.isMovingRight) this.decrementRight();
            if(!this.isMovingUp) this.decrementUp();
            if(!this.isMovingDown) this.decrementDown();
        },refreshRate)

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
}