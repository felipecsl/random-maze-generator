var Maze = function(doc, elemId) {
  this.canvas = doc.getElementById(elemId);
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.ctx = this.canvas.getContext('2d');
  this.horizCells = 30;
  this.vertCells = 30;
  this.generator = new MazeGenerator(this.horizCells, this.vertCells);
  this.cellWidth = this.width / this.horizCells;
  this.cellHeight = this.height / this.vertCells;
  
  var self = this;

  self.ctx.strokeStyle = '"rgba(0,0,0,0)"';

  return {
    width: function() {
      return self.width;
    },

    height: function() {
      return self.height;
    },

    draw: function() {
      this.drawBorders();
      this.drawMaze();
    },

    solve: function() {

    },

    drawBorders: function() {
      this.drawLine(self.cellWidth, 0, self.width, 0);
      this.drawLine(self.width, 0, self.width, self.height);
      this.drawLine(self.width - self.cellWidth, self.height, 0, self.height);
      this.drawLine(0, self.height, 0, 0);
    },

    drawMaze: function() {
      self.generator.generate();
      var graph = self.generator.graph;
      var drawnEdges = [];

      var edgeAlreadyDrawn = function(cell1, cell2) {
        return _.detect(drawnEdges, function(edge) {
          return _.include(edge, cell1) && _.include(edge, cell2);
        }) != undefined;
      };

      for(var i = 0; i < graph.width; i++) {
        for(var j = 0; j < graph.height; j++) {
          var cell = graph.cells[i][j];
          var topCell = graph.getCellAt(cell.x, cell.y - 1);
          var leftCell = graph.getCellAt(cell.x - 1, cell.y);
          var rightCell = graph.getCellAt(cell.x + 1, cell.y);
          var bottomCell = graph.getCellAt(cell.x, cell.y + 1);
          
          if(!edgeAlreadyDrawn(cell, topCell) && graph.areConnected(cell, topCell)) {
            var x1 = cell.x * self.cellWidth;
            var y1 = cell.y * self.cellHeight;
            var x2 = x1 + self.cellWidth;
            var y2 = y1;
            
            this.drawLine(x1, y1, x2, y2);
            drawnEdges.push([cell, topCell]);
          }

          if(!edgeAlreadyDrawn(cell, leftCell) && graph.areConnected(cell, leftCell)) {
            var x2 = x1;
            var y2 = y1 + self.cellHeight;
            
            this.drawLine(x1, y1, x2, y2);
            drawnEdges.push([cell, leftCell]);
          }

          if(!edgeAlreadyDrawn(cell, rightCell) && graph.areConnected(cell, rightCell)) {
            var x1 = (cell.x * self.cellWidth) + self.cellWidth;
            var y1 = cell.y * self.cellHeight;
            var x2 = x1;
            var y2 = y1 + self.cellHeight;
            
            this.drawLine(x1, y1, x2, y2);
            drawnEdges.push([cell, rightCell]);
          }

          if(!edgeAlreadyDrawn(cell, bottomCell) && graph.areConnected(cell, bottomCell)) {
            var x1 = cell.x * self.cellWidth;
            var y1 = (cell.y * self.cellHeight) + self.cellHeight;
            var x2 = x1 + self.cellWidth;
            var y2 = y1;
            
            this.drawLine(x1, y1, x2, y2);
            drawnEdges.push([cell, bottomCell]);
          }          
        }
      }
    },

    drawLine: function(x1, y1, x2, y2) {
      self.ctx.beginPath();
      self.ctx.moveTo(x1, y1);
      self.ctx.lineTo(x2, y2);
      self.ctx.stroke();
    }
  };
};