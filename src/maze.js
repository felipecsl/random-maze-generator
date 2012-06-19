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

  self.ctx.strokeStyle = '#000';

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

    drawBorders: function() {
      this.drawLine(self.cellWidth, 0, self.width, 0);
      this.drawLine(self.width, 0, self.width, self.height);
      this.drawLine(self.width, self.height, 0, self.height);
      this.drawLine(0, self.height, 0, 0);
    },

    drawMaze: function() {
      self.generator.generate();
      var graph = self.generator.graph;

      for(var i = 0; i < graph.width; i++) {
        for(var j = 0; j < graph.height; j++) {
          var cell = graph.cells[i][j];

          if(graph.areConnected(cell, graph.getCellAt(cell.x, cell.y - 1))) {
            var x1 = cell.x * self.cellWidth;
            var y1 = cell.y * self.cellHeight;
            var x2 = x1 + self.cellWidth;
            var y2 = y1;
            
            this.drawLine(x1, y1, x2, y2);
          }
          if(graph.areConnected(cell, graph.getCellAt(cell.x - 1, cell.y))) {
            var x2 = x1;
            var y2 = y1 + self.cellHeight;
            
            this.drawLine(x1, y1, x2, y2);
          }          
          if(graph.areConnected(cell, graph.getCellAt(cell.x + 1, cell.y))) {
            var x1 = (cell.x * self.cellWidth) + self.cellWidth;
            var y1 = cell.y * self.cellHeight;
            var x2 = x1;
            var y2 = y1 + self.cellHeight;
            
            this.drawLine(x1, y1, x2, y2);
          }
          if(graph.areConnected(cell, graph.getCellAt(cell.x, cell.y + 1))) {
            var x1 = cell.x * self.cellWidth;
            var y1 = (cell.y * self.cellHeight) + self.cellHeight;
            var x2 = x1 + self.cellWidth;
            var y2 = y1;
            
            this.drawLine(x1, y1, x2, y2);
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