/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var t1 = new TreeNode(1)
var t2 = new TreeNode(2)
var t3 = new TreeNode(3)
var t4 = new TreeNode(4)
var t5 = new TreeNode(5)
var t6 = new TreeNode(6)
var t7 = new TreeNode(7)

t1.right = t2
t1.left = t3

t2.right = t4
t2.left = t5

t3.right = t6
t3.left = t7


var rangeSumBST = function (root, L, R) {
    sum = 0    
    if (L <= root.val && root.val <= R) { 
        sum = sum + root.val 
        console.log('added to sum ', L, R, root.val, sum)
    }
    if (root.right) { sum = sum + rangeSumBST(root.right, L, R) }
    if (root.left) { sum = sum + rangeSumBST(root.left, L, R) }
    return sum
};


L = 3
R = 5
console.log(rangeSumBST(t1,L,R))