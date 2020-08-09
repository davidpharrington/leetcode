/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
//37%, 5%
var busyStudent = function (startTime, endTime, queryTime) {
    return startTime.reduce((a, v, i) => {
    return ((v <= queryTime) && (queryTime <= endTime[i])) ? a + 1 : a+0},0)

};


console.log(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5))