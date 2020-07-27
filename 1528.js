//most efficient solution may be along the lines of sorting indices in order 
//while simultaneously moving string's characters accordingly
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
// very inefficient solution
var restoreString = function(s, indices) {
    x = ''
    for (i = 0; i < indices.length; i++) {
        x=x.concat(s[indices.indexOf(i)])
    }
    return x
};


string = 'airnrhtgon'
indices = [1,4,2,9,3,0,7,6,8,5]
console.log(restoreString(string, indices))
