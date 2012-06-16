var Cell = function(x, y, graph) {
  this.x = x;
  this.y = y;
  this.visited = false;
  this.neighbors = [];
  this.walls = new CellWalls();

  this.addDefaultNeighbors = function() {
		if(this.y > 0) this.neighbors.push(graph.getCellAt(this.x, this.y - 1));	// Top
		this.neighbors.push(graph.getCellAt(this.x + 1, this.y));									// Right
		this.neighbors.push(graph.getCellAt(this.x, this.y + 1));												// Bottom
		if(this.x > 0) this.neighbors.push(graph.getCellAt(this.x - 1, this.y)); 	// Left
  };

  this.allNeighbors = function() {
  	return this.neighbors;
  };

  this.removeWallTo = function(neighbor) {
  	if(neighbor.y == this.y - 1) {
  		this.walls.removeAtPosition(Wall.TOP);
  	}
  	else if(neighbor.x == this.x + 1) {
  		this.walls.removeAtPosition(Wall.RIGHT);
  	}
  	else if(neighbor.y == this.y + 1) {
  		this.walls.removeAtPosition(Wall.BOTTOM);
  	}
  	else if(neighbor.x == this.x - 1) {
  		this.walls.removeAtPosition(Wall.LEFT);
  	}
  	else {
  		throw new Error('Wrong neighbor passed to Cell.removeWallTo');
  	}
  };

  this.unvisitedNeighbors = function() {
  	return _.reject(this.allNeighbors(), function(cell) {
			return cell == null || cell.visited;
		});
  };

  this.visit = function () {
    this.visited = true;
  };
};