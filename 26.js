function cl(...args) { console.log(...args) }
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let curr = 0
    let next = 0
    let lastUniquePosition = 0

    for (i = 0; i < nums.length; i++) {
        curr = nums[i]
        next = nums[i + 1]
        if (curr == next)
            continue
        else
            nums[lastUniquePosition] = curr
            cl("unique entry ", curr,lastUniquePosition)
            lastUniquePosition++                
    }
    return(lastUniquePosition-1)
};

removeDuplicates([1,1,1,2,3,6,7,9,10,12,12,12])