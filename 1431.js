/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max.apply(null, candies)
    candies.map ( (value,index) => {
        candies[index] = (value + extraCandies) >= greatest ? true : false
    })
    return candies
};
