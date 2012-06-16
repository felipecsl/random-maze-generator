describe("CellWalls", function() {
  var walls;

  beforeEach(function() {
    walls = new CellWalls();
  });

  describe('walls', function() { 
    it('should have a top wall', function() {
      expect(walls.top).toEqual(true);
    });

    it('should have a bottom wall', function() {
      expect(walls.bottom).toEqual(true);
    });

    it('should have a left wall', function() {
      expect(walls.left).toEqual(true);
    });

    it('should have a right wall', function() {
      expect(walls.right).toEqual(true);
    });
  });

  describe('removeAtPosition', function() {
    it('should be able to remove top wall', function() {
      walls.removeAtPosition(Wall.TOP);
      expect(walls.top).toBeFalsy();
    });

    it('should be able to bottom top wall', function() {
      walls.removeAtPosition(Wall.BOTTOM);
      expect(walls.bottom).toBeFalsy();
    });

    it('should be able to left top wall', function() {
      walls.removeAtPosition(Wall.LEFT);
      expect(walls.left).toBeFalsy();
    });

    it('should be able to right top wall', function() {
      walls.removeAtPosition(Wall.RIGHT);
      expect(walls.right).toBeFalsy();
    });
  });
});