var Cell = function(x, y) {
  this.x = x;
  this.y = y;
  this.visited = false;

  this.visit = function () {
    this.visited = true;
  };
};