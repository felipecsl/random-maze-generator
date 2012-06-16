describe("MazeGenerator", function() {
  var generator;

  beforeEach(function() {
    generator = new MazeGenerator(10, 20);
  });

  it("should expose generate method", function() {
    expect(generator.generate).toBeDefined();
  });

  it("should have a cell stack", function() {
    expect(generator.cellStack).toEqual([]);
  });
});