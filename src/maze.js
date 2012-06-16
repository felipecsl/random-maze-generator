var Maze = function(doc, elemId) {
  this.canvas = doc.getElementById(elemId);
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.ctx = this.canvas.getContext('2d');
  this.horizCells = 20;
  this.vertCells = 20;
  
  var self = this;

  return {
    width: function() {
      return self.width;
    },

    height: function() {
      return self.height;
    },

    draw: function() {
      this.drawGrid();
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
      var totalVisited = 1;
      var cell = new Cell(0, 0);
      var mazeGraph = new MazeGraph(self.horizCells, self.vertCells);

      cell.visit();

      // while(totalVisited < self.horizCells * self.vertCells) {
      //     if(!cell.visited) {

      //     }
      // };
    },

    drawLine: function(x1, y1, x2, y2) {
      self.ctx.beginPath();
      self.ctx.moveTo(x1, y1);  
      self.ctx.lineTo(x2, y2);
      self.ctx.stroke();
    }
  };
};