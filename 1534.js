
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

//53% 11%
//could we reduce the memory footprint by replacing vi,vj,vk?
//how coul we improve speed?
var countGoodTriplets = function (arr, a, b, c) {
    good = 0
    arr.map((vi, i) => {
        arr.slice(i + 1, arr.length).map((vj, j) => {
            arr.slice(i + 1 + j + 1, arr.length).map((vk, k) => {
                if (
                    (Math.abs(vi - vj) <= a)
                    && (Math.abs(vj - vk) <= b)
                    && (Math.abs(vi - vk) <= c)
                ) {
                    good += 1
                }
            })
        })
    })
    return good
};


console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))

