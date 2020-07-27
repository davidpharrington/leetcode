/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

 

 var createTargettarget = function(nums, index) {
    target = []
    for (i = 0; (i < nums.length && i < index.length); i++ ) {
        x = index[i]
        if (target[x]) {
            for (j = target.length; j > i ; j--) {
                target.push(target[j])
            }
        }
        console.log('target', target)
        console.log('target[index[i]]',target[index[i]])
        console.log('index[i]',index[i])
        target [index[i]]=nums[i]
    }
    return target
};


createTargettarget([9,8,6,5,5],[0,0,0,0,0])


