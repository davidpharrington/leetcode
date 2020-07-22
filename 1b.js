//given a list of random numbers between 0 and Math.floor(randMagnitude) of length lengthOfList
//choose numberOfElements elements, the sum of which = target

(function main() {
    cl = (...args) => console.log(...args);

    var twoSum = function (nums, target) {
        sett = new Set();
        nums.forEach(function (e, i, a) {
            a.forEach(function (ee, ii, aa) {
                if (e + ee === target && ii !== i) {
                    sett.add(i);
                    sett.add(ii);
                    cl(e,i,ee,ii,sett,target)
                }})
            })
            return Array.from(sett);
        }
    
    
    twoSum([3,2,3], 6)
    
}());
    








