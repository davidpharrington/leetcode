//create a clever solution that maybe sorts the nums and index arrays or somehow
//transforms them so that we don't have to loop on a loop.... i.e. so that we don't
//have to shift every element
//ideally we would produce the target array ONCE
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    target = []
    for (i = 0; i<nums.length; i ++) {
        if (target[index[i]] != undefined) {
            
            for (j = target.length-1; j >= index[i]; j--) {
                target[j+1] = target[j]
            }
        }
        target[index[i]] = nums[i]
    }
    return target
};

nums = [0,1,2] //,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]
index = [0,0,2] //,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


console.log(createTargetArray(nums,index))
