function cl(...args) { console.log(...args) }

var longestCommonPrefix = function (strs) {
    let c = ""
    let currchar = ""
    let lastchar = ""
    let i = 0

    if (strs[0]) {let l = strs.reduce((maxx, curr) => Math.min(maxx, curr.length), strs[0].length)}
    else {return ""}

    while (i < l) {
        lastchar = strs[0].charAt(i)
        for (x = 1; x < strs.length; x++) {
            currchar = strs[x].charAt(i)
            if (currchar !== lastchar) { i = l }
            lastchar = currchar
        }
        if (i<l) 
            c = c + lastchar
        i++;
    }


    return c
};

cl(longestCommonPrefix([]))

