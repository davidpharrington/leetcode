function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

t1 = new TreeNode(1)
t2 = new TreeNode(2)
t3 = new TreeNode(3)
t4 = new TreeNode(4)
t5 = new TreeNode(5)
t6 = new TreeNode(6)
t7 = new TreeNode(7)
t8 = new TreeNode(8)
t9 = new TreeNode(9)

t1.left = t2
t1.right = t3
t2.left = t4
t2.right = t5
t4.left = t6
t4.right = t7
t6.left = t8
t3.left = t9


var getLonelyNodes = function (root) {
    var n = []
    console.log(root.val, root.right, root.left)
    return n
}

getLonelyNodes(t1)
