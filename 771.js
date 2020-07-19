//solve this without using the split, search, forEach functions

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewels = 0
    S.split('').forEach( (value) => jewels += J.search(value) < 0 ? 0 : 1 )
    return jewels
};

console.log(numJewelsInStones('abG','abCDEFG'))


