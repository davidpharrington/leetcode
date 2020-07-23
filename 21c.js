//also, use recursion

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
function printListFrom (node) {
    while (node) {
        console.log(node.val)
        node = node.next
    }
}

var mergeTwoLists = function(l1, l2) {
    ll = new ListNode ( (l1.val < l2.val) ? l1.val : l2.val )
    
    if (l1.val <= l2.val) {
        ll = new ListNode (l1.val)
        if (l1.next === null) {
            if(l2.next != null ) {
                l1.next = l2 
            } else {
                return ll
            }
        } else {
            ll.next = (l1.next.val <= l2.val ) ? l1.next : l2
        }        
        if (ll.next = l1.next) {
            mergeTwoLists(ll.next, l2)
        } else {
            mergeTwoLists (ll.next,l1.next)
        }
    } 
    else if (l2.val < l1.val) {
        ll = new ListNode (l2.val)
        if (l2.next === null) {
            if (l1.next != null) {
                l1.next = l1
            } 
            else {
                return ll
            }
        } else {
            ll.next = ( l2.next.val <= l1.val ) ? l2.next : l1
        }
        if (ll.next = l2.next) {
            mergeTwoLists(ll.next, l1)
        } else {
            mergeTwoLists (ll.next,l2.next)
        }
    }

    return ll
};

l1 = new ListNode(1)
l3 = new ListNode(2)
l5 = new ListNode(4)
l1.next = l3
l3.next = l5

l2 = new ListNode(1)
l4 = new ListNode(3)
l6 = new ListNode(4)
l2.next = l4
l4.next = l6 

// printListFrom (l1)
// printListFrom (l2)

printListFrom(mergeTwoLists(l1, l2))