cl = function (...args) { console.log(...args) }

var isPalindrome = function (x) {
    if (x < 0)
        return false
    let i = 0;
    let arr = []
    let j = 0;
    while (x > 0) {
        arr.push(x % 10)
        x = Math.floor(x / 10);
        i++;
    }

    while (i > j+1) {
        if (!(arr[i - 1] === arr[j]))
            return false
        cl(i);
        cl('iiii');
        i--;
        j++;
    }
    return true
}

cl(isPalindrome(4224))
// cl(isPalindrome(55555))
// cl(isPalindrome(4545))
// cl(isPalindrome(121));
// cl(isPalindrome(-121));
// cl(isPalindrome(0));
// cl(isPalindrome(-1));
// cl(isPalindrome(1));
// cl(isPalindrome(22));
// cl(isPalindrome(444));
