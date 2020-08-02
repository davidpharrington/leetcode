//flatMap is awesome!
//this needs refactoring

// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.
// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.
// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
    var sorted = items.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]
        return a[0] - b[0]
    })

    var students = sorted.flatMap((val, idx, arr) => {
        if (idx === 0) return [val]
        if (val[0] === arr[idx - 1][0])
            return []
        return [val]
    })
    console.log(students)

    return filt = students.map((student, studentindex, studentarray) => {
        let a = sorted.filter((val, idx, arr) => (val[0] === student[0]))
                .filter((val, idx) => (idx < 5))
        return [student[0],Math.trunc((1/a.length)*a.reduce((acc, val, idx, arr) => {
            return acc + val[1]
        }, 0))]
    })

};


items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]
console.log(highFive(items))