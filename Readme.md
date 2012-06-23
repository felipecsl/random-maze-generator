# Random maze generator/solver

## Overview

This is just a simple random maze generator and solver I wrote for fun that gets drawn over a canvas on the page. It is fully written in JavaScript and tested with Jasmine.

Please feel free to fork and make comments/suggestions! Thanks!

## Implementation details

### Maze Generation

The maze is generated using a [Graph](http://en.wikipedia.org/wiki/Graph_(data_structure)) structure and a recursive [depht-first search algorithm](http://en.wikipedia.org/wiki/Depth-first_search).
All graph nodes (cells) are connected by default. By connected, I mean there is a wall separating them in the maze. As we run the DFS algorithm
to generate the maze, we start removing connections and store them in an array of removed edges in the Graph class.

The size and complexity of the maze can be configured setting different width/height for the canvas element and setting the ``horizCells`` and ``vertCells`` numbers in the Maze class.

### Maze Solution

We're using the [A * Search Algorithm](http://en.wikipedia.org/wiki/A*_search_algorithm) to find the shortest path from the start to the end of the maze. We're assuming the start cell is always the top left one, and the end is the bottom right. You can change that, however, if you like.

## Screenshots

![maze](https://raw.github.com/felipecsl/random-maze-generator/master/maze.png)

![solved maze](https://raw.github.com/felipecsl/random-maze-generator/master/solution.png)

![specs](https://raw.github.com/felipecsl/random-maze-generator/master/specs.png)

## License

You are free to reuse and/or modify this code however you like. 
If you do so, please add a note referring to this original source and attribute the credits.