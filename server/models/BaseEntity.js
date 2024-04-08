export default class BaseEntity {
	constructor(x, y, width, height, color) {
		this.position = { x, y };
		this.size = { width, height };
		this.velocity = { x: 0, y: 0 };
		this.maxVelocity = 15;
		this.acceleration = 0.7;
		this.friction = 0.9;

		this.refreshRate = 10;
		//
		// this.movingFunctions = [];
		//
		// this.incrementInterval = setInterval( () => {
		//     if(this.isMovingLeft) this.incrementLeft();
		//     if(this.isMovingRight) this.incrementRight();
		//     if(this.isMovingUp) this.incrementUp();
		//     if(this.isMovingDown) this.incrementDown();
		// },this.refreshRate);
		// this.decrementInterval = setInterval( () => {
		//     if(!this.isMovingLeft) this.decrementLeft();
		//     if(!this.isMovingRight) this.decrementRight();
		//     if(!this.isMovingUp) this.decrementUp();
		//     if(!this.isMovingDown) this.decrementDown();
		// },this.refreshRate);
		//
		//
		// this.updatePositionInterval = setInterval( () => {
		//     const oldPositionX = this.position.x;
		//     const oldPositionY = this.position.y;
		//     this.position.x += this.velocity.x;
		//     this.position.y += this.velocity.y;
		//     if(oldPositionX != this.position.x || oldPositionY != this.position.y){
		//         this.movingFunctions.forEach(fun => fun());
		//     }
		// },this.refreshRate);
	}

	//
	//     /*
	//    ---- DEPLACEMENT GAUCHE ----
	//   */
	//
	// startMovingLeft(){
	//       this.isMovingLeft = true;
	//   }
	//
	//   stopMovingLeft(){
	//       this.isMovingLeft = false;
	//   }
	//
	//   incrementLeft(){
	//       if(this.velocity.x > -this.maxVelocity)
	//           this.velocity.x += -this.acceleration;
	//   }
	//
	//   decrementLeft(){
	//       if(this.velocity.x < 0){
	//           this.velocity.x += this.friction;
	//       }
	//   }
	//
	//   /*
	//    ---- DEPLACEMENT DROITE ----
	//   */
	//
	//   startMovingRight(){
	//       this.isMovingRight = true;
	//   }
	//
	//   stopMovingRight(){
	//       this.isMovingRight = false;
	//   }
	//
	//   incrementRight(){
	//       if(this.velocity.x < this.maxVelocity)
	//           this.velocity.x += this.acceleration;
	//   }
	//
	//   decrementRight(){
	//       if(this.velocity.x > 0){
	//           this.velocity.x += -this.friction;
	//           if(this.velocity.x < 0) this.velocity.x = 0;
	//       }
	//   }
	//
	//   /*
	//    ---- DEPLACEMENT HAUT ----
	//   */
	//
	//   startMovingUp(){
	//       this.isMovingUp = true;
	//   }
	//
	//   stopMovingUp(){
	//       this.isMovingUp = false;
	//   }
	//
	//   incrementUp(){
	//       if(this.velocity.y > -this.maxVelocity)
	//           this.velocity.y += -this.acceleration;
	//   }
	//
	//   decrementUp(){
	//       if(this.velocity.y < 0){
	//           this.velocity.y += this.friction;
	//       }
	//   }
	//
	//   /*
	//    ---- DEPLACEMENT BAS ----
	//   */
	//
	//   startMovingDown(){
	//       this.isMovingDown = true;
	//   }
	//
	//   stopMovingDown(){
	//       this.isMovingDown = false;
	//   }
	//
	//   incrementDown(){
	//       if(this.velocity.y < this.maxVelocity)
	//           this.velocity.y += this.acceleration;
	//   }
	//
	//   decrementDown(){
	//       if(this.velocity.y > 0){
	//           this.velocity.y += -this.friction;
	//           if(this.velocity.y < 0) this.velocity.y = 0;
	//       }
	//   }
	//
	//   /*
	//    ---- DETECTION DEPLACEMENT ----
	//   */
	//
	//   addOnMove(movingFunction){
	//       this.movingFunctions.push(movingFunction);
	//   }
	//
	//   getData(){
	// 	return {
	// 		position : this.position,
	// 		size : this.size,
	// 		sprite : this.sprite,
	// 	};
	// }
}
