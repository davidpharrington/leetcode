/**
 * @param {number[]} nums
 * @return {number[]}
 */
//6.8% 28%
// var findDuplicates = function (nums) {
//     return nums.flatMap((v, i) => {
//         return (nums.indexOf(v, i + 1) !== -1) ? [v] : []
//     })
// };


//17% 28%
var findDuplicates = function (nums) {
    return nums.sort().slice(0,nums.length-1).filter((v,i) => v === nums[i+1])
};


console.log(findDuplicates([5, 6, 7, 8, 9, 7]))

