// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
var numIdenticalPairs = function(nums) {
    var goodPairs=0
    for (i = 0; i<nums.length; i++) {
        for (j = i+1; j<nums.length; j++) {
            if(nums[j] === nums[i]) 
                goodPairs++
        }
    }
    return goodPairs
};


console.log(numIdenticalPairs([1,2,3,1,1,3]))


// for (j=0; j++; i<nums.length) {
//     console.log(j)
// }
