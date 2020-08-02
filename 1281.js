//memorize: Array.push vs. array.unshift

//implement remainder division function
//implement the getting of the digits of an integer by recursion
//implement it by turning the integer into a string, turning that into an array

/**
 * @param {number} n
 * @return {number}
 */

var getDigits = function (n) {
    digits = []
    while (n > 0) {
        digits.unshift(n%10)
        n = Math.floor(n / 10)
    }
    digits.append
    return digits
}

var subtractProductAndSum = function(n) {
    product = 1
    sum = 0
    while (n > 0) {
        product = product * (n%10)
        sum = sum + (n%10)
        n = Math.floor(n / 10)
    }
    return (product - sum)
};
