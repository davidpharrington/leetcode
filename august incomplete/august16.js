//see two articles: 
//https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-k-times-greedy-approach/?ref=leftbar-rightbar
//https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-k-times/

/**
 * @param {number[]} prices
 * @return {number}
 */

var localMinima = function (arr) {
    return arr.flatMap((v, i, arr) => {
        return ((v <= arr[i - 1]) || i == 0) && ((v <= arr[i + 1]) || i == arr.length - 1) ? [[v, i, 0]] : []
    })
}

var localMaxima = function (arr) {
    return arr.flatMap((v, i, arr) => {
        return ((v >= arr[i - 1]) || i == 0) && ((v >= arr[i + 1]) || i == arr.length - 1) ? [[v, i, 1]] : []
    })
}

var sortedMinsAndMaxes = function (arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a[1] - b[1]);
}

var maxProfit = function (arr) {
    return sortedMinsAndMaxes(localMaxima(arr), localMinima(arr))
        .flatMap((v, i, a) => {
            console.log(v)
            if (v[2] == 0 && Boolean(a[i + 1]) && a[i + 1][2] == 1)
                return [[a[i + 1][0] - v[0], v[1], a[i + 1][1]]]
            else
                return []
        })
        // .sort((a, b) => b[0] - a[0])
        // .filter((x, i) => (i <= 1))
        // .reduce((a, v) => { return a + v[0] }, 0)
}



x = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
//expected answer is 13
//I could have had 6 + 7 but I only had 5 + 7 because I was taking differences of adjacent elements of the array
//instead of taking largest 2 differences
console.log(maxProfit(x))
// console.log(localMaxima(x))
// console.log(localMinima(x))
// console.log(maxProfit(x))