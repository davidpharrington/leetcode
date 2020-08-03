/**
 * @param {number} num
 * @return {number}
 */
//43% 8%
var maximum69Number  = function(num) {
    digits = [...num.toString()]
    index = digits.indexOf('6')
    digits.splice(index, 1, '9')
    return digits.reduce((acc,val, idx) => 
         acc + parseInt(val) * Math.pow(10,(digits.length - idx - 1)),0)
};


console.log(maximum69Number ('9669'))