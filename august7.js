function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

t1 = new TreeNode(3)
t2 = new TreeNode(9)
t3 = new TreeNode(20)
t5 = new TreeNode(15)
t6 = new TreeNode(7)

t1.left = t2
t1.right = t3
t3.left = t5
t3.right = t6

/* @param {TreeNode} root
 * @return {number[][]}
 */

var verticalTraversal = function (root) {
    var coo = function (node, lastx, lasty) {
        console.log('last one ', coords[coords.length - 1])
        coords = coords.concat([[lastx, lasty]])
        //     [[node.right ?
        //         (node.right.val ? node.right.val : null) : null,
        //     node.left ?
        //         (node.left.val ? node.left.val : null) : null]]
        // )

        console.log('ccccc', coords)
        if (node.right !== null) coo(node.right, coords[coords.length - 1][0] + 1, coords[coords.length - 1][1] - 1)
        if (node.left !== null) coo(node.left, coords[coords.length - 1][0] - 1, coords[coords.length - 1][1] - 1)
    }
    var coords = [[0, 0]]
    coo(root, coords[coords.length -1][0], coords[coords.length -1][1])
    console.log('ddddd', coords)
};


verticalTraversal(t1)

bt = [3, 9, 20, null, null, 15, 7]

