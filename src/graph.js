var Graph = function(width, height) {
  this.width = width;
  this.height = height;
  this.cells = [];
  this.removedEdges = [];

  this.getCellAt = function (x, y) {
    if(x >= this.width || y >= this.height || x < 0 || y < 0) {
    	return null;
    }
    if(!this.cells[x]) {
    	return null;
    }
    return this.cells[x][y];
  };

  this.getCellDistance = function (cell1, cell2) {
    var xDist = Math.abs(cell1.x - cell2.x);
    var yDist = Math.abs(cell1.y - cell2.y);
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  },

  this.areConnected = function(cell1, cell2) {
  	if(!cell1 || !cell2) {
  		return false;
  	}
  	if(Math.abs(cell1.x - cell2.x) > 1 || 
  		Math.abs(cell1.y - cell2.y) > 1) {
  		return false;
  	}

  	var removedEdge = _.detect(this.removedEdges, function(edge) {
  		return _.include(edge, cell1) && _.include(edge, cell2);
  	});

  	return removedEdge == undefined;
  };

  this.cellUnvisitedNeighbors = function(cell) {
  	return _.select(this.cellNeighbors(cell), function(c) {
      return !c.visited;
    });
  };

  this.cellNeighbors = function(cell) {
    var neighbors = [];

    if(cell.y > 0) {
      var topCell = this.getCellAt(cell.x, cell.y - 1);

      if(topCell && this.areConnected(cell, topCell)) {
        neighbors.push(topCell);
      }
    }
    if(cell.x < this.width) {
      var rightCell = this.getCellAt(cell.x + 1, cell.y);

      if(rightCell && this.areConnected(cell, rightCell)) {
        neighbors.push(rightCell);
      }
    }
    if(cell.y < this.height) {
      var bottomCell = this.getCellAt(cell.x, cell.y + 1);

      if(bottomCell && this.areConnected(cell, bottomCell)) {
        neighbors.push(bottomCell);
      }
    }
    if(cell.x > 0) {
      var leftCell = this.getCellAt(cell.x - 1, cell.y);

      if(leftCell && this.areConnected(cell, leftCell)) {
        neighbors.push(leftCell);
      }
    }

    return neighbors;
  };

  this.removeEdgeBetween = function(cell1, cell2) {
  	this.removedEdges.push([cell1, cell2]);
  };

  for(var i = 0; i < this.width; i++) {
  	this.cells.push([]);
  	row = this.cells[i];

  	for(var j = 0; j < this.height; j++) {
  		var cell = new Cell(i, j, this);
  		row.push(cell);
  	}
  }
};