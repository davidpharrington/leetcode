// Runtime: 100 ms, faster than 12.43% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 42.3 MB, less than 5.82% of JavaScript online submissions for Split a String in Balanced Strings.
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var x = []
    var n = 0

    x = [...s].map((val, idx) => {
        return val === 'L' ? 0 : 1
    }, 0)

    for (ieven = 2; ieven <= s.length; ieven = ieven + 2) {
        if (x.slice(0, ieven).reduce((acc, val) => acc + val) === (ieven) / 2) {
            n=n+1
        }
    }
    return n
};


balancedStringSplit('RLRLRRLLRLRLLLLRRR')



//  console.log([5,4,3,2,1].slice(0,2))
