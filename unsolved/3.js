/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let substringBeingSearchedForLongestSubstring;
    let longestSubstringOverall = 0;


    for (i = 0; i <= s.length; i++) {
        substringBeingSearchedForLongestSubstring = s.slice(i,s.length);
        // if (substringBeingSearchedForLongestSubstring.length < longestSubstringOverall) continue;

        let longestSubstring = 0;
        let currentSubstring = "";
        for (i in substringBeingSearchedForLongestSubstring) {
            if (currentSubstring.includes(substringBeingSearchedForLongestSubstring[i])) {
                if (currentSubstring.length > longestSubstring) {
                    longestSubstring = currentSubstring.length;
                }
                currentSubstring = substringBeingSearchedForLongestSubstring[i];
            } else {
                currentSubstring += substringBeingSearchedForLongestSubstring[i];
            }
            console.log(substringBeingSearchedForLongestSubstring, longestSubstringOverall, longestSubstring, currentSubstring);
        }
        if (currentSubstring.length > longestSubstring) {
            longestSubstring = currentSubstring.length;
        };

        if (longestSubstring > longestSubstringOverall) longestSubstringOverall = longestSubstring;
        console.log(substringBeingSearchedForLongestSubstring, longestSubstringOverall, longestSubstring, currentSubstring);
    }
    return longestSubstringOverall;
};



// console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"));
console.log(lengthOfLongestSubstring("dvdf"));

