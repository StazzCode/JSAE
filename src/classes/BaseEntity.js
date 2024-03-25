class BaseEntity {
    constructor(x, y, width, height, color) {
        this.position = { x, y };
        this.size = { width, height };
        this.velocity = { x: 0, y: 0 };
        this.maxVelocity = 10;
        this.acceleration = 0.5;
        this.friction = 0.9;
    }
}
