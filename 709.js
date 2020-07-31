// do this with regular expressions

//we could dynamically create the dictionary, as below, but it's slower than doing an ojbect literal
//     dict = {}
// var alph = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
// var abet = [...'abcdefghijklmnopqrstuvwxyz']
// alph.forEach ( function (val, index) {
//     dict[val]=abet[index]
// })


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    upperLower = {
        A:'a', 
        B:'b',
        C:'c',
        D:'d',
        E:'e',
        F:'f',
        G:'g',
        H:'h',
        I:'i',
        J:'j',
        K:'k',
        L:'l',
        M:'m',
        N:'n',
        O:'o',
        P:'p',
        Q:'q',
        R:'r',
        S:'s',
        T:'t',
        U:'u',
        V:'v',
        W:'w',
        X:'x',
        Y:'y',
        Z:'z'
    }

    var lower = [...str]
    lower = lower.reduce( (acc, val) => {
        return acc.concat( (upperLower[val]) ? upperLower[val] : val )
    },'')
    return lower 
};


console.log(toLowerCase('David Harrington'))