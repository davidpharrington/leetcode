// Runtime: 100 ms, faster than 56.05 % of JavaScript online submissions for Search in a Binary Search Tree.
// Memory Usage: 45.1 MB, less than 50.52 % of JavaScript online submissions for Search in a Binary Search Tree.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const l1 = new TreeNode(1);
const l2 = new TreeNode(3);
const l3 = new TreeNode(2);
const l4 = new TreeNode(5);
l1.left = l2;
l1.right = l3;
l2.left = l4;

const r1 = new TreeNode(2);
const r2 = new TreeNode(1);
const r3 = new TreeNode(3);
const r4 = new TreeNode(4);
const r5 = new TreeNode(7);
r1.left = r2;
r1.right = r3;
r2.right = r4;
r3.right = r5;

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) {
    return null
  } else if (root.val === val) {
    return root;
  } else if (root.left === val) {
    return root.left
  } else if (root.right === val) {
    return root.right
  }
  const searchLeft = searchBST(root.left, val);
  if (searchLeft !== null) return searchLeft;

  const searchRight = searchBST(root.right, val);
  if (searchRight !== null) return searchRight;

  return null
}


console.dir(searchBST(r1, 1), { depth: null });


