var MazeGraph = function(width, height) {
  this.width = width;
  this.height = height;
  this.cells = [];

  for(var i = 0; i < this.width; i++) {
  	this.cells.push([]);
  	row = this.cells[i];
  	for(var j = 0; j < this.height; j++) {
  		row.push(new Cell(i, j));
  	}
  }

  this.getCellAt = function (x, y) {
    if(x > this.width || y > this.height || x < 0 || y < 0) {
    	return null;
    }
    return this.cells[x][y];
  }

  this.getCellUnvisitedNeighbors = function(cell) {
  	return [
  		this.getCellAt(cell.x - 1, cell.y - 1),
  		this.getCellAt(cell.x, cell.y - 1),	
  		this.getCellAt(cell.x + 1, cell.y - 1),
  		this.getCellAt(cell.x - 1, cell.y),
  		this.getCellAt(cell.x + 1, cell.y),
  		this.getCellAt(cell.x - 1, cell.y - 1),
  		this.getCellAt(cell.x, cell.y + 1),
  		this.getCellAt(cell.x + 1, cell.y + 1)
		];
  }
};