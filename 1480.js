var runningSum = function(nums) {
    nums.reverse().map((currentValue, index, array) => {
        nums[index] = array.slice(index).reduce( 
            (accumulator, currentValue, currentIndex, partialArray) => {
                return accumulator+currentValue
            }, 0
        )
    })
    nums.reverse()
    return nums
};

