// Runtime: 88 ms, faster than 68.83 % of JavaScript online submissions for Max Increase to Keep City Skyline.
// Memory Usage: 41.6 MB, less than 13.64 % of JavaScript online submissions for Max Increase to Keep City Skyline.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rowMax = new Array(grid.length).fill(0);
  let colMax = new Array(grid[0].length).fill(0);

  //calculate row and column maxes
  for (row in grid) {
    for (col in grid[row]) {
      rowMax[row] = Math.max(rowMax[row], grid[row][col]);
      colMax[col] = Math.max(colMax[col], grid[row][col]);
    }
  }

  //calculate how much we could increase the height for every building in the grid
  let totalIncreasedHeight = 0;

  for (row in grid) {
    for (col in grid[row]) {
      const possibleIncreaseForThisBuilding = Math.min(rowMax[row], colMax[col]) - grid[row][col];
      if (possibleIncreaseForThisBuilding > 0) {
        totalIncreasedHeight = totalIncreasedHeight + possibleIncreaseForThisBuilding;
      }
    }
  }

  return totalIncreasedHeight;
};

grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];

console.log(maxIncreaseKeepingSkyline(grid));