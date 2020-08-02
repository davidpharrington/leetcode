//also try a solution that replaces this WHILE loop with a splice forEach
//also try a solution that doesn't shift all the elements of the array but rather takes from the very last element and 
//replaces the offending element with the very last element as long as it's not also an offender === val

//you cannot break out of a forEach but you can break out of every
//https://stackoverflow.com/questions/6260756/how-to-stop-javascript-foreach/6260865

// do this with functional programming e.g. every, forEach

cl = (...args) => console.log(...args)

var removeElement = function (nums, val) {
    let l = nums.length
    for (index = 0; index < nums.length; index = index) {
        if (nums[index] === val) {
            cl('cutting this one',index,nums[index])
            let i = index
            while (i < l - 1) {
                
                cl('shifting here', i, nums[i], nums[i+1])
                nums[i] = nums[i + 1]
                i++
            }
            l--
            console.log('l', l, 'index', index, nums.splice(0, l))
        }
        else { 
            index++
            cl('we moved up')
        }
    }
    return (l)
};

nums = [3, 2, 2, 2, 2, 3, 3, 2, 3]
console.log('nums', nums, 'nums.length', nums.length)

nums.splice(0, removeElement(nums, 3))
