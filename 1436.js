
/**
 * @param {string[][]} paths
 * @return {string}
 */
//speed 31 memory 30
var destCity = function (paths) {
    depart = new Set()
    arrive = new Set()

    paths.forEach((v) => {
        depart.add(v[0])
        arrive.add(v[1])
    });
    return [...arrive].filter((v) => !depart.has(v))[0]
};

paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
console.log(destCity(paths))


