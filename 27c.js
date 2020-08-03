//write this using splice
//implement a splice function

// the gold in terms of optimization is to take the last value of the array and put it into the value you just replaced
// that would let us only loop once
// right now that second loop that shifts all the elements is a big resource waste

cl = (args) => console.log(args)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 

var removeElement = function (nums, val) {
    // nums.forEach((currentValue, index, array) => nums[index] = (currentValue === val) ? null : nums[index])
    let l = nums.length

    for (j = 0; j<nums.length;j++) {
        if (nums[j] === val) {
            //shifting the rest of the array, to delete this value
            for (i = j; i < nums.length; i++) {
                nums[i] = nums[i+1]
            }
            nums.length--
            j--
        }
    }
    return nums.length
};

nums = [3, 1, 2, 3, 3, 4, 5, 4, 3, 2, 1, 3, 3, 3, 3]
val = 3
console.log(nums.splice(0,removeElement(nums, val)))

