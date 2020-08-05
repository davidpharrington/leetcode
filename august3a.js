
//82% ... 40 MB used no % told 
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '');
    s = s.replace(/[A-Z]/g, x => x.toLowerCase())
    if (s.length === 0) return true
    return s.split("").slice(0, Math.floor(s.length / 2)).every((v, i) => {
        return s[i] === s[s.length - i - 1]
    })

};

isPalindrome('A man, a plan, a canal: Panama')
