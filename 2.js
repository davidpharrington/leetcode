// Runtime: 212 ms, faster than 8.83% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 45.6 MB, less than 16.87% of JavaScript online submissions for Add Two Numbers.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = {
    val: 9, next: {
        val: 9, next: {
            val: 9, next: {
                val: 9, next: {
                    val: 9, next: {
                        val: 9, next: {
                            val: 9, next: null
                        }
                    }
                }
            }
        }
    }
};

let l2 = {
    val: 9, next: {
        val: 9, next: {
            val: 9, next: {
                val: 9, next: null,
            }
        }
    }
};


var addTwoNumbers = function (l1, l2) {
    let resultAnchor = {};
    let resultNode = null;
    let carry = 0;
    let newVal = null;


    while (l1 && "val" in l1 || l2 && "val" in l2) {
        const add = ((l1 && "val" in l1) ? l1.val : 0) + ((l2 && "val" in l2) ? l2.val : 0) + carry;

        carry = 0;
        if (add > 9) {
            newVal = add - 10;
            carry = 1;
        } else {
            newVal = add;
        }

        if (!resultNode) {
            resultNode = { val: newVal, next: (l1 && l1.next || l2 && l2.next) ? {} : null };
            resultAnchor = resultNode;
        } else {
            resultNode.next = { val: newVal, next: (l1 && l1.next || l2 && l2.next) ? {} : null };
            resultNode = resultNode.next;
        };
        l1 = (l1 && l1.next) ? l1.next : null;
        l2 = (l2 && l2.next) ? l2.next : null;

    };
    
    if (carry) {
        console.log("carry");
        resultNode.next = { val: 1, next: null };
    };
    
    // console.log("resultAnchor");
    // console.dir(resultAnchor, { depth: null });
    return resultAnchor;
};

addTwoNumbers(l1, l2);



