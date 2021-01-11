// 1689.js


//best solution so far:
// Runtime: 124 ms, faster than 32.88 % of JavaScript online submissions for Partitioning Into Minimum Number Of Deci - Binary Numbers.
// Memory Usage: 45.5 MB, less than 53.10 % of JavaScript online submissions for Partitioning Into Minimum Number Of Deci - Binary Numbers.

var minPartitions = function (n) {
  return n.split("").reduce((acc, val) => Math.max(acc, parseInt(val)), 0);

};




// Runtime: 232 ms, faster than 6.74 % of JavaScript online submissions for Partitioning Into Minimum Number Of Deci - Binary Numbers.
// Memory Usage: 47.2 MB, less than 23.45 % of JavaScript online submissions for Partitioning Into Minimum Number Of Deci - Binary Numbers.

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const digits = n.split("").map(x => parseInt(x))
  return Math.max(...digits);
};


