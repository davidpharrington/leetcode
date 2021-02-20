// Runtime: 76 ms, faster than 79.20 % of JavaScript online submissions for Length of Last Word.
// Memory Usage: 42.7 MB, less than 5.54 % of JavaScript online submissions for Length of Last Word.
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let lastWordCompleted = 0;
  let counter = 0;
  if (s.length === 0) return 0;
  if (s.length === 1 && s === " ") return 0;
  if (s.length === 1 && s !== " ") return 1;

  for (i in s) {
    if (s[i] !== " ") {
      counter = counter + 1;
    }
    if (s[i] === " " && s[i - 1] !== " ") {
      lastWordCompleted = counter;
      counter = 0;
    }
  }
  if (counter > 0) lastWordCompleted = counter;
  return lastWordCompleted

};
