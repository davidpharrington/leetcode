// Runtime: 116 ms, faster than 86.79% of JavaScript online submissions for Find Center of Star Graph.
// Memory Usage: 54.9 MB, less than 50.24% of JavaScript online submissions for Find Center of Star Graph.
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    if (edges[1].includes(edges[0][0])) {
        return edges[0][0]
    } else return edges[0][1]
};


