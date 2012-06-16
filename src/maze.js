var Maze = function(doc, elemId) {
  this.canvas = doc.getElementById(elemId);
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.ctx = this.canvas.getContext('2d');
  this.horizCells = 20;
  this.vertCells = 20;
  this.generator = new MazeGenerator(this.horizCells, this.vertCells);
  this.cellWidth = this.width / this.horizCells;
  this.cellHeight = this.height / this.vertCells;
  
  var self = this;

  return {
    width: function() {
      return self.width;
    },

    height: function() {
      return self.height;
    },

    draw: function() {
      //this.drawGrid();
      this.drawMaze();
    },

    drawGrid: function() {
      var posX = 0;
      var posY = 0;
      var incrX = self.width / self.horizCells;
      var incrY = self.height / self.vertCells;

      self.ctx.lineWidth = 1;
      self.ctx.strokeStyle = '#ddd';

      do {
          posX += incrX;
          this.drawLine(posX, 0, posX, self.height);
      } while(posX < self.width);

      do {
          posY += incrY;
          this.drawLine(0, posY, self.width, posY);
      } while(posY < self.height);
    },

    drawMaze: function() {
      self.generator.generate();
      var graph = self.generator.graph;
      self.ctx.strokeStyle = '#000';

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