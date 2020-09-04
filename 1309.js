//would be faster to loop through the string itself, rather than first constructing an array

/**
 * @param {string} s
 * @return {string}
 */

//construct the hash table
// alphabet = 'abcdefghijklmnopqrstuvwxyz'
// encoding = {}
// alphabet.split("").forEach((v, i) => {
//     x = i + 1
//     if (i < 9) {
//         encoding[x] = v
//     }
//     else {
//         encoding[x.toString() + "#"] = v
//     }
// })

//speed 12 memory 5
var freqAlphabets1 = function (s) {
    theDictionary = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z'
    }
    return [...s].flatMap((v, i, a) => {
        if (v == "#" || a[i + 1] == "#") return []
        triplet = a.slice(i, i + 3).join("")
        if (a[i + 2] == "#") return [theDictionary[triplet]]
        return [theDictionary[v]]
    }).join("")

};



// 
var freqAlphabets = function (s) {
    theDictionary = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z'
    }
    answer = ''
    for (i in s) {
        if (s[i] == "#" || s[parseInt(i) + 1] == "#") continue
        if (s[parseInt(i) + 2] == "#") {
            answer = answer + [theDictionary[s.substring(i, parseInt(i) + 3)]]
            continue
        }
        answer = answer + theDictionary[s[i]]
    }
    return answer
};

console.log(freqAlphabets("10#11#12"))

