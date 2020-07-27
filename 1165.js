//findIndex vs. indexOf
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

/* original version written as quickly as possible */
 // var calculateTime = function(keyboard, word) {
//     keyboardArray = keyboard.split('')
//     wordArray = word.split('')
//     wordKeyboardIndices = wordArray.map ( (currentValue) => {
//         return keyboardArray.indexOf(currentValue)
//     })
//     console.log(wordKeyboardIndices)
//     time = wordKeyboardIndices.reduce ( (accumulator, currentValue, index) => {
//         if (index === 0) return currentValue
//         return accumulator + Math.abs(currentValue - wordKeyboardIndices[index-1])
//     })
//     console.log(time)
// };

// calculateTime('qwertyuiopasdfghjklzxcvbnm', 'david')

/* version with fewer lines of code */
/*
var calculateTime = function(keyboard, word) {
    return word.split('').map ( (currentValue) => {
        return keyboard.split('').indexOf(currentValue)
    }).reduce ( (accumulator, currentValue, index, array) => {
        return (index === 0) ? 0 : accumulator + Math.abs(currentValue - array[index-1])
    })
};*/


/* version with a faster run time */
var hrstart = process.hrtime()
var calculateTime = function(keyboard, word) {
    keyboardArray = keyboard.split('')
    return word.split('').reduce ( (accumulator, currentValue, index, array) => {
        return (index === 0) ? keyboardArray.indexOf(currentValue) : accumulator + Math.abs(keyboardArray.indexOf(currentValue) - keyboardArray.indexOf(array[index-1]))
    }, 0 )
};


console.log(calculateTime('qwertyuiopasdfghjklzxcvbnm', 'david'))

console.log(process.hrtime(hrstart)[1]/1000000, 'ms')
