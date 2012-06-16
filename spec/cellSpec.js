describe("Cell", function() {
  var cell;

  beforeEach(function() {
    cell = new Cell(10, 20);
  });

  describe('coordinates', function() {
    it("should have a x coordinate", function() {
      expect(cell.x).toEqual(10);
    });
    
    it("should have a y coordinate", function() {
      expect(cell.y).toEqual(20);
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
});