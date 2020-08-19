function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

t1 = new TreeNode(3)
t2 = new TreeNode(9)
t3 = new TreeNode(20)
t5 = new TreeNode(15)
t6 = new TreeNode(7)

t1.left = t2
t1.right = t3
t3.left = t5
t3.right = t6

/* @param {TreeNode} root
 * @return {number[][]}
 */

var verticalTraversal = function (root) {
    //the following is if they give us a single node
    var coords = []
    var coo = function (node, nodex) { //nodey
        coords = coords.concat([[node.val, nodex]])
        if (node.right !== null) coo(node.right, nodex + 1) //nodey - 1
        if (node.left !== null) coo(node.left, nodex - 1) //nodey - 1
    }
    coo(root, 0, 0)
    coords = coords.sort((a, b) => a[1] - b[1])
    console.log(coords)


    //the following is if they give us an array of the whole binary tree
    
        // y = root.map((v, i, a) => {
        //     return [v, 0 - Math.floor(Math.log2(i + 1))]
    
        // })
    
        // seen = {}
        // repeat = 1
        // for ([i, v] of y.entries()) {
        //     if (v[1] == 0) continue
        //     if (seen.hasOwnProperty(v[1])) {
        //         y[i][1] = y[i - 1][1] + 1 + repeat
        //         repeat *= -1
        //     }
        //     else {
        //         repeat = 1
        //     }
        //     seen[v[1]] = 1
    
        //     // console.log(i)
        // }
        // coords = y.filter((v) => v[0] !== null).sort((a, b) => a[1] - b[1])
    
//////////////////////////////////////////////////////////////////    


    distinctx = coords.map((v, i, a) => v[1]).filter((v, i, a) => {
        return !i || v !== a[i - 1]
    })

    answer = distinctx.map((vm, im, am) => {
        return coords.filter((v, i, a) => {
            return vm == v[1]
        }).map((x) => x[0])
    })
    return answer
};



bt = [3, 9, 20, null, null, 15, 7]
verticalTraversal(bt)


