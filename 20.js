function cl(...args) { console.log(...args) }

var isValid = function (s) {
    let kv = {
        '(': 1,
        ')': -1,
        '[': 2,
        ']': -2,
        '{': 3,
        '}': -3
    }
    let stack = []

    for (i of s) {
        int = kv[i]

        if (int > 0) 
            stack.push(int)
        if (int < 0) {
            if (int == -stack.slice(-1)) {
                stack.pop()
            }
            else return false
        }
    }
    if (stack.length == 0)
        return (true)
    else return false

};

cl(isValid(''))
