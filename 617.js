// Runtime: 112 ms, faster than 80.72 % of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 46.8 MB, less than 8.31 % of JavaScript online submissions for Merge Two Binary Trees.


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


var mergeTrees = function (t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  const tempval = t1.val + t2.val;
  let templeft;
  let tempright;

  if (t1.left === null && t2.left === null) {
    templeft = null;
  }
  else if (t1.left == null && t2.left !== null) {
    templeft = t2.left;
  }
  else if (t1.left !== null && t2.left == null) {
    templeft = t1.left;
  }
  else if (t1.left !== null && t2.left !== null) {
    templeft = mergeTrees(t1.left, t2.left);
  }
  if (t1.right === null && t2.right === null) {
    tempright = null;
  }
  else if (t1.right == null && t2.right !== null) {
    tempright = t2.right;
  }
  else if (t1.right !== null && t2.right == null) {
    tempright = t1.right;
  }
  else if (t1.right !== null && t2.right !== null) {
    tempright = mergeTrees(t1.right, t2.right);
  }

  return {
    val: tempval,
    left: templeft,
    right: tempright,
  }
};




console.dir(mergeTrees(l1, r1), { depth: null });
console.dir(mergeTrees(null, new TreeNode(1)), { depth: null });


