var Graph = function(width, height) {
  this.width = width;
  this.height = height;
  this.cells = [];

  this.getCellAt = function (x, y) {
    if(x >= this.width || y >= this.height || x < 0 || y < 0) {
    	return null;
    }
    return this.cells[x][y];
  };

  for(var i = 0; i < this.width; i++) {
  	this.cells.push([]);
  	row = this.cells[i];

  	for(var j = 0; j < this.height; j++) {
  		var cell = new Cell(i, j, this);
  		row.push(cell);
  	}
  }

  for(var i = 0; i < this.width; i++) {
  	for(var j = 0; j < this.height; j++) {
  		this.cells[i][j].addDefaultNeighbors();
  	}
  }
};