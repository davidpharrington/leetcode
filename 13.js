function cl(...args) { console.log(...args) }

var romanToInt = function (s) {
    var r2i = {
        "": 0,
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let n = 0;
    let i = s.length - 1;
    let prev = "";
    let curr = s.charAt(i + 1)

    while (i >= 0) {
        prev = curr;
        curr = s.charAt(i)
        if (r2i[prev] <= r2i[curr]) 
        {
            n += r2i[curr]
        }
        else {
            n -= r2i[curr];
        }
        i--;
    }

    return n
};

cl(romanToInt('MMCM'))
