/**
 * @param {number} N
 * @return {boolean}
 */

 //47% performance; 25% memory
var isArmstrong = function(N) {
    result = 0
    digits = [...N.toString()]
    for (i in digits) {
        result += Math.pow(parseInt(digits[i]), digits.length)
    }
    return (result == N)
};
