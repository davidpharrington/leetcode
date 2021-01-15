// Runtime: 108 ms, faster than 71.92 % of JavaScript online submissions for Sum of Nodes with Even - Valued Grandparent.
// Memory Usage: 49.3 MB, less than 13.79 % of JavaScript online submissions for Sum of Nodes with Even - Valued Grandparent.

/** Definition for a binary tree node. */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

const n1 = new TreeNode(6);
const n2 = new TreeNode(7);
const n3 = new TreeNode(8);
const n4 = new TreeNode(2);
const n5 = new TreeNode(7);
const n6 = new TreeNode(1);
const n7 = new TreeNode(3);
const n8 = new TreeNode(9);
const n9 = new TreeNode(1);
const n10 = new TreeNode(4);
const n11 = new TreeNode(5);
n1.left = n2;
// n2.left = 
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
 * @return {number}
 */


var sumEvenGrandparent = function (root) {
  let grandTotal = 0;
  if (root && root.val % 2 == 0) {

    if (root.left && root.left.left) {
      grandTotal = root.left.left.val + grandTotal;

    }
    if (root.left && root.left.right) {
      grandTotal = root.left.right.val + grandTotal;

    }
    if (root.right && root.right.left) {
      grandTotal = root.right.left.val + grandTotal;

    }
    if (root.right && root.right.right) {
      grandTotal = root.right.right.val + grandTotal;

    }
  }

  if (root.left) {
    grandTotal = grandTotal + sumEvenGrandparent(root.left);

  };
  if (root.right) {
    grandTotal = grandTotal + sumEvenGrandparent(root.right);

  };
  return grandTotal;
};



root = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]
