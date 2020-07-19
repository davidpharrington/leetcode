// also solve this with recursion

var numberOfSteps  = function(num) {
    var steps = 0
    while (num > 0) {
        num = (num/2) === Math.floor(num/2) ? num/2 : num - 1
        steps++
    } 
};
