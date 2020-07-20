// nums.sort()

var smallerNumbersThanCurrent = function(nums) {
    var answer = Array.from({length:nums.length})

    nums.map((current, index, array) => {
        answer[index] = nums.filter((value, index, array) => (value<current)).length
    })
    return answer
};

console.log(smallerNumbersThanCurrent ([5,4,6,1,4,3,7,9, 8, 2, 3, 9, 7]))