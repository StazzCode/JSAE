export default class Map {
	topBorder;
	bottomBorder;
	constructor(topBorder, bottomBorder) {
		this.topBorder = topBorder;
		this.bottomBorder = bottomBorder;
	}
	getTopBorder() {
		return this.topBorder;
	}
	getBottomBorder() {
		return this.bottomBorder;
	}
}
