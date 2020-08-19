/**
 * @param {string} s
 * @return {number}
 */

// producing the dictt was done by
// x = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
// d = {}
// x.map((v, i) => d[v] = i + 1)

//62% 53%
var titleToNumber1 = function (s) {
    dictt = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }

    sum = 0
    s.split("").reverse().map((v, i) => {
        sum = sum + dictt[v] * Math.pow(26, i)
    })
    return sum
};


//62% 16%
var titleToNumber3 = function (s) {
    dictt = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }

    sum = 0
    s.split("").map((v, i) => {
        sum = sum + dictt[v] * Math.pow(26, s.length - i - 1)
    })
    return sum
};

// 79% 32%
var titleToNumber3 = function (s) {
    dictt = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }

    sum = 0;
    [...s].map((v, i) => {
        sum = sum + dictt[v] * Math.pow(26, s.length - i - 1)
    })
    return sum
};


//98.6% 37%
var titleToNumber4 = function (s) {
    dictt = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    };

    return [...s].reduce((a, v, i) => {
        return a = a + dictt[v] * Math.pow(26, s.length - i - 1)
    }, 0)
};


console.log(titleToNumber4("ZY"))




