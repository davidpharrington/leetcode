
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
 let oldResult = null;
 let carry = 0;

 var addTwoNumbers = function (l1, l2) {
     while (l1.next && l2.next) {
         const add = l1.val + l2.val + carry;
         carry = add > 9 ? 1 : 0;
 
         const newResult = {
             val: add > 9 ? add - 10 : add,
             next: oldResult
         };
         oldResult = newResult;
         l1 = l1.next;
         l2 = l2.next;
     };
 
     if (l1.next && !l2.next) {
         while (l1.next) {
             const add = l1.val + carry + (l2 && l2.val ? l2.val : 0);
             carry = add > 9 ? 1 : 0;
             const newResult = {
                 val: add > 9 ? add - 10 : add,
                 next: oldResult
             };
             oldResult = newResult;
             l1 = l1.next;
             console.log("oldResult");
             console.log(oldResult);
         };
     } else if (!l1.next && l2.next) {
         while (l2.next) {
             const add = l2.val + carry + (l1 && l1.val ? l1.val : 0);
             carry = add > 9 ? 1 : 0;
             const newResult = {
                 val: add > 9 ? add - 10 : add,
                 next: oldResult
             };
             oldResult = newResult;
             l2 = l2.next;
             console.log("oldResult line 46");
             console.log(oldResult);
         };
     };
 
     if (!l1.next && !l2.next) {
         const add = l1.val + l2.val + carry;
         carry = add > 9 ? 1 : 0;
 
         const newResult = {
             val: add > 9 ? add - 10 : add,
             next: oldResult
         };
         oldResult = newResult;
     };
     if (carry === 1) {
         const newResult = {
             val: 1,
             next: oldResult,
         };
         oldResult = newResult;
 
     };
     console.log("oldResult line 59");
     console.log(oldResult);
     return oldResult;
 };


