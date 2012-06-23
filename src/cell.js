var Cell = function(x, y) {
  this.x = x;
  this.y = y;
  this.visited = false;

  // When solving the maze, this represents
  // the previous node in the navigated path.
  this.parent = null;

  this.visit = function () {
    this.visited = true;
  };

  this.score = function () {
  	return 0;
  };
};