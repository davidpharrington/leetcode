//l1 = [2,4,3], l2 = [5,6,4]
//[7,0,8]

l1 = {
    val: 2,
    next: {
        val: 4,
        next: { val: 3 }
    }
};

l2 = {
    val: 5,
    next: {
        val: 6,
        next: { val: 4 }
    }
};

let ultimateResult = null;
let previousNode = null;

var addTwoNumbers = function (l1, l2) {
    while (l1.next || l2.next) {

        newNode = {
            val: (l1.val || 0) + (l2.val || 0),
            next: null,
        };

        ultimateResult = ultimateResult ? { ...ultimateResult, next: newNode } : newNode;
        console.log("ultimateResult");
        console.log(ultimateResult);
        l1 = l1.next || null;
        l2 = l2.next || null;
    };

    newNode = {
        val: (l1.val || 0) + (l2.val || 0),
        next: null,
    };

    if(ultimateResult) {
        ultimateResult.next = newNode;
    };
};

addTwoNumbers(l1, l2);


