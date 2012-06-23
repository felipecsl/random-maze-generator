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
  	var unvisitedNeighbors = [];

  	if(cell.x > 0) {
  		var leftCell = this.getCellAt(cell.x - 1, cell.y);

  		if(leftCell && !leftCell.visited && this.areConnected(cell, leftCell)) {
  			unvisitedNeighbors.push(leftCell);
  		}
  	}
  	if(cell.y > 0) {
  		var topCell = this.getCellAt(cell.x, cell.y - 1);

  		if(topCell && !topCell.visited && this.areConnected(cell, topCell)) {
  			unvisitedNeighbors.push(topCell);
  		}
  	}
  	if(cell.x < this.width) {
  		var rightCell = this.getCellAt(cell.x + 1, cell.y);

  		if(rightCell && !rightCell.visited && this.areConnected(cell, rightCell)) {
  			unvisitedNeighbors.push(rightCell);
  		}
  	}
  	if(cell.y < this.height) {
  		var bottomCell = this.getCellAt(cell.x, cell.y + 1);

  		if(bottomCell && !bottomCell.visited && this.areConnected(cell, bottomCell)) {
  			unvisitedNeighbors.push(bottomCell);
  		}
  	}
  	return unvisitedNeighbors;
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