
var decompressRLElist = function (nums) {
    var increment = 0
    for (i = 0; i<nums.length-1; i = i + increment ) {
        increment = nums[i]
        nums.splice(i,2,...new Array(nums[i]).fill(nums[i+1]))
        console.log(nums)
    }
    return nums
};

console.log(decompressRLElist([65,44,72,15]))
