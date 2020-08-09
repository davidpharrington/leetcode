/**
 * @param {number[]} nums
 * @return {number}
 */
//38% 5%
//there are various ways we could avoid the slice function there
var maxProduct = function (nums) {
    var i = (nums[0] < nums[1]) ? 0 : 1
    var j = (i == 0) ? 1 : 0 
        nums.slice(2, nums.length).map((v, k) => {
            if (v > nums[i]) {
                console.log(v, i, j, k)
                if (v > nums[j]) {
                    if (nums[j] > nums[i]) i = j
                    j = k + 2
                }
                else i = k + 2
            }
        })

    return (nums[i] - 1) * (nums[j] - 1)
};

console.log(maxProduct([10, 2, 5, 2]))