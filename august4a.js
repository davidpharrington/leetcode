//Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//Follow up: Could you solve it without loops/recursion?


/**
 * @param {number} num
 * @return {boolean}
 */

// 19% and about 38 MB
// var isPowerOfFour = function (num) {
//     if (num === 1) return true
//     if (num < 1) return false
//     return isPowerOfFour(num / 4)
// };

//6% 37 MB
var isPowerOfFour = function (num) {

    if (num & (
        0b1
        | 0b100
        | 0b10000
        | 0b1000000
        | 0b100000000
        | 0b10000000000
        | 0b1000000000000
        | 0b100000000000000
        | 0b10000000000000000
        | 0b1000000000000000000
        | 0b100000000000000000000
        | 0b10000000000000000000000
        | 0b1000000000000000000000000
        | 0b100000000000000000000000000
        | 0b10000000000000000000000000000
        | 0b1000000000000000000000000000000)) {
        if (num.toString(2).split("").reduce((acc, val) => acc + parseInt(val), parseInt(0)) == 1) {
            return true
        }
    }
    return false
};

console.log(isPowerOfFour(1))
