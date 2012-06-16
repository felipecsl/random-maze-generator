describe("MazeGraph", function() {
  var graph;

  beforeEach(function() {
    graph = new MazeGraph(30, 30);
  });

  describe('initialization', function() {
    it('should initialize a two dimensional array with cells', function() {
      for(var i = 0; i < 30; i++) {
        for(var j = 0; j < 30; j++) {
          var cell = graph.cells[i][j];
          expect(cell.x).toEqual(i);
          expect(cell.y).toEqual(j);
        }
      }
    });
  });

  describe('getCellAt', function () {
    it("should return a cell", function() {
      cell = graph.getCellAt(10, 12);
      expect(cell.x).toEqual(10);
      expect(cell.y).toEqual(12);
    });

    it("should save changes to cell", function() {
      cell = graph.getCellAt(12, 3);
      cell.visit();
      graph.getCellAt(12, 43);
      expect(cell.visited).toBeTruthy();
    });

    it("should not return a cell outside of graph boundaries", function() {
      cell = graph.getCellAt(1000, 1000);
      expect(cell).toBeNull();
    });

    it("should not return a cell at negative x", function() {
      cell = graph.getCellAt(-1, 20);
      expect(cell).toBeNull();
    });

    it("should not return a cell at negative y", function() {
      cell = graph.getCellAt(20, -1);
      expect(cell).toBeNull();
    });
  });
  
  describe('getCellUnvisitedNeighbors', function () {
    it('should return all 8 cell neighbors', function() {
      neighbors = graph.getCellUnvisitedNeighbors(new Cell(10, 10));

      expect(neighbors[0].x).toEqual(9);
      expect(neighbors[0].y).toEqual(9);
      expect(neighbors[1].x).toEqual(10);
      expect(neighbors[1].y).toEqual(9);
      expect(neighbors[2].x).toEqual(11);
      expect(neighbors[2].y).toEqual(9);
      expect(neighbors[3].x).toEqual(9);
      expect(neighbors[3].y).toEqual(10);
      expect(neighbors[4].x).toEqual(11);
      expect(neighbors[4].y).toEqual(10);
      expect(neighbors[5].x).toEqual(9);
      expect(neighbors[5].y).toEqual(9);
      expect(neighbors[6].x).toEqual(10);
      expect(neighbors[6].y).toEqual(11);
      expect(neighbors[7].x).toEqual(11);
      expect(neighbors[7].y).toEqual(11);
    });

    it('should not return visited neighbors', function() {
      
    });

    it('should not return unexisting/null cells', function() {
      
    });
  });
});