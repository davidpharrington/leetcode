// Runtime: 196 ms, faster than 40.07 % of JavaScript online submissions for Design an Ordered Stream.
// Memory Usage: 50.5 MB, less than 62.09 % of JavaScript online submissions for Design an Ordered Stream.

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.streamLength = n;
  this.buffer = {};
  this.lastReturnedIndex = 0;
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function (id, value) {
  this.buffer[id] = value;
  chunkToReturn = [];
  while (`${this.lastReturnedIndex + 1}` in this.buffer) {
    chunkToReturn.push(this.buffer[`${this.lastReturnedIndex + 1}`]);
    this.buffer[`${this.lastReturnedIndex + 1}`] = undefined;
    this.lastReturnedIndex = this.lastReturnedIndex + 1;
  }

  return chunkToReturn

};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */