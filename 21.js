function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (val === undefined ? null : next);
};

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

  if (l2 === undefined && l1 !== undefined || l1 && l1.val <= l2.val) {
    r = l1;
    return {
      val: l1.val,
      next: mergeTwoLists(l1.next, l2)
    };

  };

  if (l1 === undefined && l2 !== undefined || l2 && l2.val < l1.val) {
    r = l2;
    return {
      val: l2.val,
      next: mergeTwoLists(l2.next, l1)
    };

  };

  if (l1 === undefined & l2 === undefined) {
    return null;
  };

};




// const l23 = new ListNode(23);
//console.dir(l23);

// const l19 = new ListNode(19, l23);
//console.dir(l19);

// const l17 = new ListNode(17, l19);
//console.dir(l17);

// const l13 = new ListNode(13, l17);
//console.dir(l13);

// const l11 = new ListNode(11, l13);
//console.dir(l11);

// const l7 = new ListNode(7, l11);
//console.dir(l7);

const l5 = new ListNode(5);
// const l5 = new ListNode(5, l7);
//console.dir(l5);

const l3 = new ListNode(3, l5)
//console.dir(l5);

const l1 = new ListNode(1, l3)


const l22 = new ListNode(22);
//console.dir(l22);
const l20 = new ListNode(20, l22);
//console.dir(l20);
const l18 = new ListNode(18, l20);
//console.dir(l18);

const l16 = new ListNode(16, l18);
//console.dir(l16);

const l14 = new ListNode(14, l16);
//console.dir(l14);

const l12 = new ListNode(12, l14);
//console.dir(l12);

const l10 = new ListNode(10, l12);
//console.dir(l10);

const l8 = new ListNode(2, l10);
//console.dir(l8);

const l6 = new ListNode(2, l8);
//console.dir(l6);

const l4 = new ListNode(2, l6);
//console.dir(l4);

const l2 = new ListNode(2, l4);
//console.dir(l2);

const merged = mergeTwoLists(l1, l2);

console.dir(merged, { depth: null });