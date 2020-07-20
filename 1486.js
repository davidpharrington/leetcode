// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    return Array.from({length:n}, (value, index) => start + 2 * index).reduce((previousValue, currentValue) => previousValue ^ currentValue, null)
};

console.log(xorOperation(8, 0))
