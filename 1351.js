/**
 * @param {number[][]} grid
 * @return {number}
 */

//speed 31 memory 40
var countNegatives = function (grid) {
    count = 0
    positiveColumn = 0
    for (row = grid.length - 1; row >= 0 && grid[row][grid[row].length - 1] < 0; row--) {
        for (col = grid[row].length - 1; col >= positiveColumn; col--) {
            if (grid[row][col] < 0) count += 1
            else positiveColumn = col
        }
    }
    return count
};


grid = [[4, 3, 2, 1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]

console.log(countNegatives(grid))
