//process.stdout.write(
//how exactly should we use the fact that it's 2n long if we can ONLY shuffle?

//could write a brute force version using array.IndexOf
//could write a functional programming version using maps
//could make an iterator

//see 1470algorithm.xlsx. Map out a 1-by-1 algorithm that only replaces what it needs one at a time, without using any 
//memory. the algorithm we use below does use some memory.

//the algorithm we wrote below is rather big picture smart

//map out a "n memory" algorithm if you could switch 2 at once, or 3 at once, or 4 at once or whatever

// use iterators in order to map in reverse

// var shuffle = function(nums, n) {
//     nums.slice(n,2*n).map( (currentValue, index) => {
//         nums.slice(2*index + 1,n - 1 + index).reverse().map((currentValue, index) => {
//             nums[index+1] = currentValue
//             console.log(nums)
//         })
//         nums[2*index + 1] = currentValue 
//     })

// };

var shuffle = function (nums, n) {
    var mover
    for (imove = 0; imove <= (n - 1); imove++) {
        mover = nums[imove + n]
        for (iscoot = n + imove - 1; iscoot >= (2 * imove + 1); iscoot--) {
            nums[iscoot + 1] = nums[iscoot]
        }
        nums[2 * imove + 1] = mover
    }
    return nums
};

toShuffle = [21, 23, 25, 27, 29, 22, 24, 26, 28, 30]
console.log(shuffle(toShuffle, 5))