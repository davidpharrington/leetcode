/**
 * @param {string} S
 * @return {string}
 */
//85% 35%
 var removeOuterParentheses = function (S) {
    var score = 0
    S = S.split("")
    return S.reduce((a, v, i) => {
        if (v === '(') {
            score += 1
            if (score ===1) return a
        }
        if (v === ')') {
            score -= 1
            if (score === 0) return a
        }
        return a + v
    }, '')
};

console.log(removeOuterParentheses("(()())(())"))
