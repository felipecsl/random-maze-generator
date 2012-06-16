describe("Maze", function() {
  var maze;
  var context = {};
  var fakeDoc = {
    getElementById: function(elemId) {
      return {
        width: 100,
        height: 200,
        getContext: function () { 
          return context; 
        }
      };
    }
  };

  beforeEach(function() {
    spyOn(fakeDoc, 'getElementById').andCallThrough();
    maze = new Maze(fakeDoc, 'elemId');
  });

  it("should expose draw method", function() {
    expect(maze.draw).toBeDefined();
  });

  it("should get canvas by id", function () {
    expect(fakeDoc.getElementById).toHaveBeenCalledWith('elemId');
  });

  it("should have a width", function () {
    expect(maze.width()).toEqual(100);
  });

  it("should have a height", function () {
    expect(maze.height()).toEqual(200);
  });
});