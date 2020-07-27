function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

t1 = new TreeNode(99)
t2 = new TreeNode(99)
t3 = new TreeNode(77)
t4 = new TreeNode(55)
t5 = new TreeNode(33)

t6 = new TreeNode(88)
t7 = new TreeNode(66)
t8 = new TreeNode(44)
t9 = new TreeNode(22)

t1.left = t2
t2.left = t3
t3.left = t4
t4.left = t5

t1.right = t6
t6.right = t7
t7.right = t8
t8.right = t9

var getLonelyNodes = function (root) {
    var n = []
    if (!root.right && root.left)  n.push(...[root.left.val])
    if (root.right && !root.left)  n.push(...[root.right.val])
    if (root.right) n.push(...getLonelyNodes(root.right))
    if (root.left) n.push(...getLonelyNodes(root.left))
    return n
}

console.log(getLonelyNodes(t1))
