//why can't this be done in 1 single function with recursion????!!!!

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/*
  @param {ListNode} head
  @return {number}
 */

l1 = new ListNode(1)
l2 = new ListNode(0)
l3 = new ListNode(1)
l4 = new ListNode(0)
l5 = new ListNode(0)
l1.next = l2
l2.next = l3
l3.next = null //l4
l4.next = l5

var getDecimalValue = function (head) {
    var getDigits = function (head) {
        var digits = [head.val]
        if(head.next) 
            digits.push(...getDigits(head.next))
        return digits
    }
    return getDigits(head).reduce( (acc,val,idx, arr) => acc+val*Math.pow(2,arr.length-idx-1),0)
};

console.log(getDecimalValue(l1))
