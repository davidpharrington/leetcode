//arr.flat
//
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */


 //40%; 10%

 //the use of matrix.forEach and matirx[0].forEach probably harms performance ??
 //is map intended to return a new array and thus not a good idea for performance, if you don't intend to?
 //forEach doesn't play nicely with asynchronous functions...

 //you could take a different approach -- somehow calculate which values in the matrix at position [row,col] will
 //be odd, based on how many times your indices array is expected to hit them
 //and never need to create the array
 //and never need to modify the array

var oddCells = function (n, m, indices) {
    var matrix = [...Array(n)].map((valn, idxn) =>
        [...Array(m)].map((valm, idxm) => 0))
    indices.map((pair) => {
        matrix[0].forEach((v, i) => {
            matrix[pair[0]][i] += 1
        })
        matrix.forEach((v, i) => {
            matrix[i][pair[1]] += 1
        })
    });
    return matrix.flat().reduce((a, v) => {return a += (Math.trunc(v/2)!==v/2) ? 1: 0},0)
}

indices = [
    [2, 1]]
console.log(oddCells(5, 3, indices))

