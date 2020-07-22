function cl(...args) { console.log(...args) }


// function maxStrings (strs) {
//     let accumulator=0

//     strs.reduce(
//         function (accumulator, currentValue, currentIndex, array) {
//             cl(accumulator)
//             cl(currentValue)

//             return Math.max(accumulator.length, currentValue.length)
//         }
//     )
// }

// cl(maxStrings (["abc","abcdefg","hijklmnop"]))


[1, 3, 6, 0, 9, 2, 3, 4, 5].reduce(
    function findMax(prev, curr, ind, arr) {

        return Math.max(prev, curr)
    }
)


cl(strs.reduce( (maxx,curr) => Math.max(maxx,curr.length),0))


