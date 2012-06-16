describe("Graph", function() {
  var graph;

  beforeEach(function() {
    graph = new Graph(30, 30);
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

  describe('cellUnvisitedNeighbors', function() {
    it('should not return visited neighbors', function() {
      graph.getCellAt(2, 3).visit();
      
      var neighbors = graph.cellUnvisitedNeighbors(graph.getCellAt(2, 2));
      expect(neighbors.length).toEqual(3);
    });
  });

  describe('areConnected', function() {
    it('should return true', function() {
      var cell1 = graph.getCellAt(3, 5);
      var cell2 = graph.getCellAt(3, 6);
      expect(graph.areConnected(cell1, cell2)).toBeTruthy();
    });

    it('should return false', function() {
      var cell1 = graph.getCellAt(2, 2);
      var cell2 = graph.getCellAt(12, 3);
      expect(graph.areConnected(cell1, cell2)).toBeFalsy();
    });
  });

  describe('removeEdgeBetween', function() {
    it('should remove wall to neighbor on the top', function() { 
      var cell1 = graph.getCellAt(2, 2);
      var cell2 = graph.getCellAt(2, 1);
      expect(graph.areConnected(cell1, cell2)).toBeTruthy();
      graph.removeEdgeBetween(cell1, cell2);
      expect(graph.areConnected(cell1, cell2)).toBeFalsy();
    });

    it('should remove wall to neighbor on the right', function() { 
      var cell1 = graph.getCellAt(2, 2);
      var cell2 = graph.getCellAt(3, 2);
      expect(graph.areConnected(cell1, cell2)).toBeTruthy();
      graph.removeEdgeBetween(cell1, cell2);
      expect(graph.areConnected(cell1, cell2)).toBeFalsy();
    });

    it('should remove wall to neighbor on the bottom', function() { 
      var cell1 = graph.getCellAt(2, 2);
      var cell2 = graph.getCellAt(2, 3);
      expect(graph.areConnected(cell1, cell2)).toBeTruthy();
      graph.removeEdgeBetween(cell1, cell2);
      expect(graph.areConnected(cell1, cell2)).toBeFalsy();
    });

    it('should remove wall to neighbor on the left', function() { 
      var cell1 = graph.getCellAt(2, 2);
      var cell2 = graph.getCellAt(1, 2);
      expect(graph.areConnected(cell1, cell2)).toBeTruthy();
      graph.removeEdgeBetween(cell1, cell2);
      expect(graph.areConnected(cell1, cell2)).toBeFalsy();
    });
  });
});