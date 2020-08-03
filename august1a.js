

//26%
var detectCapitalUse = function(word) {
    var allcaps = /^[A-Z]*$/g;
    var first = /^[A-Z][a-z]*$/g;
    var none = /^[a-z]*$/g;
    if (word.match(allcaps) || word.match(first) || word.match(none)) return true
    return false    
};

//56%
var detectCapitalUse = function(word) {
    if (word.match(/^[A-Z]*$|^[A-Z][a-z]*$|^[a-z]*$/g)) return true
    return false    
};


console.log(detectCapitalUse('David'))