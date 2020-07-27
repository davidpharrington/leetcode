//appending to an Array
//push, unshift, 
//apply.push
//use push & ...
//concat
//array[array.length]=3
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

 

var createTargetArray = function(nums, index) {
    target = []
    var x 
    nums.map( (value, i) => {
        console.log('a', target)
        if(target[index[i]]) {
            x = target[target.length]
            console.log('b', target)
            target = target.slice(index[i]).map( ( val, indexx, array) => array[indexx-1])
            console.log('c', target)
        }
        target[index[i]] = value
        
    })
    return target
};


nums = [1,2,3,4,5]
index = [0,1,1,1,1]
console.log(createTargetArray(nums, index))

