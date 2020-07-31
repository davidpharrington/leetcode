// the geometric realization is that 
// if you pick the coordinate (x or y) with the largest difference
// between the current point and the next point
// then it doesn't matter if you travel diagonally or straight up and down
// you can ignore the other coordinate difference; just deal with the coordinate 
// with the largest absolute value difference

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    return points.reduce((acc, val, idx, arr) => {
        return acc +
            ((idx < arr.length - 1)
                ? Math.max(Math.abs(arr[idx + 1][0] - val[0]),
                    Math.abs(arr[idx + 1][1] - val[1]))
                : 0)
    }, 0)
};

points = [[559, 511], [932, 618], [-623, -443], [431, 91], [838, -127], [773, -917], [-500, -910], [830, -417], [-870, 73], [-864, -600], [450, 535], [-479, -370], [856, 573], [-549, 369], [529, -462], [-839, -856], [-515, -447], [652, 197], [-83, 345], [-69, 423], [310, -737], [78, -201], [443, 958], [-311, 988], [-477, 30], [-376, -153], [-272, 451], [322, -125], [-114, -214], [495, 33], [371, -533], [-393, -224], [-405, -633], [-693, 297], [504, 210], [-427, -231], [315, 27], [991, 322], [811, -746], [252, 373], [-737, -867], [-137, 130], [507, 380], [100, -638], [-296, 700], [341, 671], [-944, 982], [937, -440], [40, -929], [-334, 60], [-722, -92], [-35, -852], [25, -495], [185, 671], [149, -452]]
console.log(minTimeToVisitAllPoints(points))
