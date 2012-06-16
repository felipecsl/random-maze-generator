describe("Cell", function() {
  var cell;

  beforeEach(function() {
    cell = new Cell(10, 10, new Graph(20, 20));
    cell.addDefaultNeighbors();
  });

  describe('coordinates', function() {
    it("should have a x coordinate", function() {
      expect(cell.x).toEqual(10);
    });
    
    it("should have a y coordinate", function() {
      expect(cell.y).toEqual(10);
    });
  });

  describe('visited', function () {
    it('should not be initially visited', function() {
      expect(cell.visited).toBeFalsy();
    });

    it('should be able to visit cell', function() {
      cell.visit();
      expect(cell.visited).toBeTruthy();
    });
  });

  describe('allNeighbors', function () {
    it('should return all 8 cell neighbors', function() {
      neighbors = cell.allNeighbors();

      expect(neighbors[0].x).toEqual(10);
      expect(neighbors[0].y).toEqual(9);
      expect(neighbors[1].x).toEqual(11);
      expect(neighbors[1].y).toEqual(10);
      expect(neighbors[2].x).toEqual(10);
      expect(neighbors[2].y).toEqual(11);
      expect(neighbors[3].x).toEqual(9);
      expect(neighbors[3].y).toEqual(10);
    });

    it('should not return unexisting/null cells', function() {
      var cell = new Cell(0, 0, new Graph(20, 20));
      cell.addDefaultNeighbors();
      var neighbors = cell.allNeighbors();
      expect(neighbors.length).toEqual(2);
    });
  });

  describe('unvisitedNeighbors', function() {
    it('should not return visited neighbors', function() {
      var neighbor = cell.unvisitedNeighbors()[0];
      neighbor.visit();
      
      var neighbors = cell.unvisitedNeighbors();
      expect(neighbors.length).toEqual(3);
    });
  });

  describe('removeWallToNeighbor', function() {
    it('should remove wall to neighbor on the top', function() { 
      neighbor = cell.allNeighbors()[0];
      cell.removeWallTo(neighbor);
      expect(cell.walls.top).toBeFalsy();
      expect(cell.walls.bottom).toBeTruthy();
      expect(cell.walls.left).toBeTruthy();
      expect(cell.walls.right).toBeTruthy();
    });

    it('should remove wall to neighbor on the right', function() { 
      neighbor = cell.allNeighbors()[1];
      cell.removeWallTo(neighbor);
      expect(cell.walls.top).toBeTruthy();
      expect(cell.walls.bottom).toBeTruthy();
      expect(cell.walls.left).toBeTruthy();
      expect(cell.walls.right).toBeFalsy();
    });

    it('should remove wall to neighbor on the bottom', function() { 
      neighbor = cell.allNeighbors()[2];
      cell.removeWallTo(neighbor);
      expect(cell.walls.top).toBeTruthy();
      expect(cell.walls.bottom).toBeFalsy();
      expect(cell.walls.left).toBeTruthy();
      expect(cell.walls.right).toBeTruthy();
    });

    it('should remove wall to neighbor on the left', function() { 
      neighbor = cell.allNeighbors()[3];
      cell.removeWallTo(neighbor);
      expect(cell.walls.top).toBeTruthy();
      expect(cell.walls.bottom).toBeTruthy();
      expect(cell.walls.left).toBeFalsy();
      expect(cell.walls.right).toBeTruthy();
    });
  });
});