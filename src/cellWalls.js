var CellWalls = function() {
	this.top = true;
	this.bottom = true;
	this.left = true;
	this.right = true;

	this.removeAtPosition = function(position) {
		switch(position) {
			case Wall.TOP:
				this.top = false;
				break;
			case Wall.BOTTOM:
				this.bottom = false;
				break;
			case Wall.LEFT:
				this.left = false;
				break;
			case Wall.RIGHT:
				this.right = false;
				break;
		}
	};
};

var Wall = {
	TOP: 0,
	BOTTOM: 1,
	LEFT: 2,
	RIGHT: 3
};