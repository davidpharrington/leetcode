// Runtime: 92 ms, faster than 61.56 % of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 41 MB, less than 6.95 % of JavaScript online submissions for Merge Two Sorted Lists.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

};


p1 = new ListNode(2);
p2 = new ListNode(3);
p3 = new ListNode(5);
p4 = new ListNode(7);
p5 = new ListNode(11);
p6 = new ListNode(13);
p7 = new ListNode(17);
p8 = new ListNode(19);
p9 = new ListNode(23);
p10 = new ListNode(29);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;
p7.next = p8;
p8.next = p9;
p9.next = p10;

f1 = new ListNode(1);
f2 = new ListNode(1);
f3 = new ListNode(2);
f4 = new ListNode(3);
f5 = new ListNode(5);
f6 = new ListNode(8);
f7 = new ListNode(13);
f8 = new ListNode(21);
f9 = new ListNode(34);
f10 = new ListNode(55);
f1.next = f2;
f2.next = f3;
f3.next = f4;
f4.next = f5;
f5.next = f6;
f6.next = f7;
f7.next = f8;
f8.next = f9;
f9.next = f10;






var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 == null) {
    return null
  }
  if (l1 === null && l2 !== null) {
    return {
      val: l2.val,
      next: l2.next
    }
  }
  if (l1 !== null && l2 == null) {
    return {
      val: l1.val,
      next: l1.next
    }
  };

  if (l1.val <= l2.val) {
    if (l1.next === null && l2 == null) return {
      val: l1.val,
      next: null
    }
    if (l1.next === null && l2 !== null) return {
      val: l1.val,
      next: l2
    };
    if (l1.next !== null && l2 == null) return {
      val: l1.val,
      next: l1.next
    };
    if (l1.next !== null && l2 !== null) return {
      val: l1.val,
      next: mergeTwoLists(l1.next, l2)
    };

  } else if (l1.val > l2.val) {
    if (l1 === null && l2.next == null) return {
      val: l2.val,
      next: null
    }
    if (l1 === null && l2.next !== null) return {
      val: l2.val,
      next: l2
    };
    if (l1 !== null && l2.next == null) return {
      val: l2.val,
      next: l1
    };
    if (l1 !== null && l2.next !== null) return {
      val: l2.val,
      next: mergeTwoLists(l1, l2.next)
    };

  };

};


console.dir(mergeTwoLists(f1, p1), { depth: null });



