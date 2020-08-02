/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    return A.map( (val, idx, arr ) => {
        return B.indexOf(val)
    })
};

A=[12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]

console.log(anagramMappings(A,B))

