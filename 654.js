// Runtime: 120 ms, faster than 62.00 % of JavaScript online submissions for Maximum Binary Tree.
// Memory Usage: 45.2 MB, less than 75.50 % of JavaScript online submissions for Maximum Binary Tree.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  const { max, maxindex } = nums
    .reduce((acc, val, index) => {
      return val > acc.max ? {
        max: val,
        maxindex: index
      } : acc
    }, { max: nums[0], maxindex: 0 })

  return {
    val: max,
    left: constructMaximumBinaryTree(nums.slice(0, maxindex)),
    right: constructMaximumBinaryTree(nums.slice(maxindex + 1, nums.length)),
  };

};


console.dir(constructMaximumBinaryTree([1, 4, 2, 6, 8, 11, 3, 5, 9, 7, 10]), { depth: null });



