// Runtime: 104 ms, faster than 65.77 % of JavaScript online submissions for Group the People Given the Group Size They Belong To.
// Memory Usage: 45.2 MB, less than 15.92 % of JavaScript online submissions for Group the People Given the Group Size They Belong To.

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
// Input: groupSizes = [2, 1, 3, 3, 3, 2]
// Output: [[1], [0, 5], [2, 3, 4]]

var groupThePeople = function (groupSizes) {
  groupSizes = groupSizes.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  let grouped = [];
  let currentGroup = [];

  for (i of groupSizes) {

    currentGroup.push(i[1]); //add a person
    if (currentGroup.length === i[0]) {
      grouped.push(currentGroup); //add a group
      currentGroup = [];
    }
  }
  return grouped
};


// [3, 3, 3, 3, 3, 1, 3]
const groupSizes = [2, 1, 3, 3, 3, 2];
console.log(groupThePeople(groupSizes));

