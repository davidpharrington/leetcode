//should you do this with bitwise operators?

/**
 * @param {number} n
 * @return {number[]}
 */
//speed 14 memory 32
var sumZero1 = function (n) {
    half = Math.floor(n / 2)
    if (half != n / 2)
        return new Array(n).fill(0).map((v, i, a) => a[i] = i - half)
    else
        return new Array(n).fill(0).map((v, i, a) => a[i] = i - half + ((i >= half) ? 1 : 0))
};

//speed 59 memory 11
var sumZero = function (n) {
    half = Math.floor(n / 2)
    answer = new Array(n).fill(0)

    if (half != n / 2) {
        answer.forEach((v, i) => answer[i] = i - half)
        return answer
    }
    else {
        answer.forEach((v, i, a) => answer[i] = i - half + ((i >= half) ? 1 : 0))
        return answer
    }
};

console.log(sumZero(6))

