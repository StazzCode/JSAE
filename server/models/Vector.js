// vector class
class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static add(v1, v2) {
		return new Vector(v1.x + v2.x, v1.y + v2.y);
	}

	static sub(v1, v2) {
		return new Vector(v1.x - v2.x, v1.y - v2.y);
	}

	static mult(v, n) {
		return new Vector(v.x * n, v.y * n);
	}

	static div(v, n) {
		return new Vector(v.x / n, v.y / n);
	}

	static dot(v1, v2) {
		return v1.x * v2.x + v1.y * v2.y;
	}

	static angleBetween(v1, v2) {
		return Math.acos(Vector.dot(v1, v2) / (v1.mag() * v2.mag()));
	}

	static random2D() {
		let angle = Math.random() * 2 * Math.PI;
		return new Vector(Math.cos(angle), Math.sin(angle));
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}

	sub(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
	}

	mult(n) {
		this.x *= n;
		this.y *= n;
	}

	div(n) {
		this.x /= n;
		this.y /= n;
	}

	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalize() {
		let m = this.mag();
		if (m !== 0) {
			this.div(m);
		}
	}

	limit(max) {
		if (this.mag() > max) {
			this.normalize();
			this.mult(max);
		}
	}

	setMag(n) {
		this.normalize();
		this.mult(n);
	}

	copy() {
		return new Vector(this.x, this.y);
	}
}
