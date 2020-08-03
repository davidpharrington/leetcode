//79.9% performance

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.items = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.items[key] = true
    console.log('added', key)
};
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    delete this.items[key]
    console.log('deleted', key)
};
/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    if (this.items[key] === undefined) {
        console.log(this.items, 'doesn\'t have property', key)
        return false
    }
    console.log(this.items, 'has property', key)
    return true
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


d = new MyHashSet()
d.add('4')
d.add('3')
//d.add('1')

console.log(d.contains(4))
console.log(d.contains(2))
console.log(d.contains(3))
console.log(d.contains(1))


console.log(Object.keys(d))
