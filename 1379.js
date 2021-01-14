// Runtime: 312 ms, faster than 59.53 % of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 59.1 MB, less than 97.21 % of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.



function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {

  if (!cloned) return null;
  if (!cloned.val) return null;
  if (cloned.val === target.val) return cloned;

  const left = cloned.left == null ? null : getTargetCopy(original, cloned.left, target);
  if (left && left.val && left.val === target.val) return left;

  const right = (cloned.right == null) ? null : getTargetCopy(original, cloned.right, target);
  if (right && right.val && right.val === target.val) return right;

  return null;
};



