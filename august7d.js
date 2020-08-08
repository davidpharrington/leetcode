function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

t1 = new TreeNode(0)
t2 = new TreeNode(5)
t3 = new TreeNode(9)
t1.left = t2
t2.left = t3

t4 = new TreeNode(1)
t5 = new TreeNode(2)
t6 = new TreeNode(3)
t1.right = t4
t4.left = t5
t5.right = t6

t7 = new TreeNode(4)
t8 = new TreeNode(8)
t9 = new TreeNode(6)
t10 = new TreeNode(7)
t6.left = t7
t6.right = t8
t7.left = t9
t9.left = t10


var verticalTraversal = function(root) {
    var coords = []
    var coo = function (node, nodex,nodey) {
        coords = coords.concat([[node.val, nodex,nodey]])
        if (node.right !== null) coo(node.right, nodex + 1,nodey-1)
        if (node.left !== null) coo(node.left, nodex - 1,nodey-1)
    }
    coo(root, 0, 0)
    coords = coords.sort((a, b) => a[1] - b[1])
/*** could also sort based on the y coordinate */

    console.log(coords)
        distinctx = coords.map((v, i, a) => v[1]).filter((v, i, a) => {
        return !i || v !== a[i - 1]
    })

    answer = distinctx.map((vm, im, am) => {
        return coords.filter((v, i, a) => {
            return vm == v[1]
        }).map((x) => x[0])
    })
    answer.map ( v => v.sort((a,b)=>a-b))
    return answer


};

console.log(verticalTraversal(t1))
