// Runtime: 100 ms, faster than 95.26 % of JavaScript online submissions for Deepest Leaves Sum.
// Memory Usage: 48.7 MB, less than 73.72 % of JavaScript online submissions for Deepest Leaves Sum.



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

var deepestLeavesSum = function (root) {

  let calculateDepth = function (root) {
    let depthOfLeft = 0;
    let depthOfRight = 0;
    if (root.left) {
      depthOfLeft = 1 + calculateDepth(root.left);
    }
    if (root.right) {
      depthOfRight = 1 + calculateDepth(root.right);
    }
    return Math.max(depthOfRight, depthOfLeft)
  }
  let maximumDepth = calculateDepth(root);

  let sumDeepestLeaves = function (root, depth) {
    let totalSum = 0;
    if (depth === maximumDepth) {
      totalSum = totalSum + root.val;
    }
    if (root.left) {
      totalSum = totalSum + sumDeepestLeaves(root.left, depth + 1);
    }
    if (root.right) {
      totalSum = totalSum + sumDeepestLeaves(root.right, depth + 1);
    }
    return totalSum;
  }
  return sumDeepestLeaves(root, 0)

};




root = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]
// Output: 15

