/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) {
    if (s === " ") return 0
    if (s !== " ") return 1
  }

  let counter = 0;
  if (s[0] !== " ") counter = 1;

  for (i = 1; i < s.length; i++) {
    if (s[i - 1] === " " && s[i] !== " ") {
      counter = 1;
      continue;
    }
    else if (s[i] !== " ") {
      counter = counter + 1;
    }
  }

  return counter

};