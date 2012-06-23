var MazeGenerator = function(rows, cols) {
	this.graph = new Graph(rows, cols);
	this.cellStack = [];

	var self = this;

	var recurse = function(cell) {
		cell.visit();
    var neighbors = self.graph.cellUnvisitedNeighbors(cell);
    if(neighbors.length > 0) {
    	var randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
    	self.cellStack.push(cell);
    	self.graph.removeEdgeBetween(cell, randomNeighbor);
    	recurse(randomNeighbor);
    }
    else {
    	var waitingCell = self.cellStack.pop();
    	if(waitingCell) {
    		recurse(waitingCell);
    	}
    }
  };

	this.generate = function() {
		var initialCell = this.graph.getCellAt(0, 0);
		recurse(initialCell);
	};
};