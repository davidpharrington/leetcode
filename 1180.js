/**
 * @param {string} S
 * @return {number}
 */

// d = [...new Set([...S])]
// return d

//speed 44 memory 16
var contiguousStrings = function (S) {
    index = 0
    contiguousStrings = []
    for (i in S) {
        if (i == 0) {
            contiguousStrings[index] = S[i]
            continue
        }
        if (S[i] != S[i - 1]) {
            index++
            contiguousStrings[index] = S[i]
        } else {
            contiguousStrings[index] = contiguousStrings[index] + S[i]
        }
    }
    
    return contiguousStrings.reduce ( (a,v,i) => {
        return a + v.length*(v.length+1)/2 
    }, 0)
}


// var countLetters = function (S) {
//     allSubstrings = contiguousStrings(S)
//         .flatMap((v, i, a) => [...v]
//             .flatMap((v, i, a) =>
//                 a.slice(0, i + 1).join("")))
//     return allSubstrings //distinct sub strings
// };


console.log(contiguousStrings("aaaba"))


// aaaaa
// aaaa aaaa
// aaa aaa aaa
// aa aa aa aa 
// a a a a a 