//could also determine how many digits are in a number by floor division by 10 until it's 0

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
    return nums.filter( (value, index, array) => 
         Math.floor(value.toString().length /2) === value.toString().length /2
    ).length
};


console.log(findNumbers([2,10,22,333,4232,423,55555,0]))