//not yet solved by this approach
/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.n = n;
  this.buffer = [];
  this.largestReturned = 0;

};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  this.buffer.push([id, value]);
  this.buffer = this.buffer.sort((a, b) => a[0] - b[0]);

  let chunkToReturn = [];
  if (this.buffer.length > 0 && this.largestReturned + 1 === this.buffer[0][0]) {
    console.log("should return");
    let chunkEndIndex = 1;
    if (chunkEndIndex <= this.buffer.length) {
      for (i = 1; i <= this.buffer.length; i++) {

        if (value[i - 1][0] !== value[i]) {
          break;
          chunkEndIndex = i - 1;
        } else {
          chunkEndIndex = i;
        }
      }
    }
    chunkToReturn = this.buffer.slice(0, chunkEndIndex);
    this.buffer = this.buffer.slice(chunkEndIndex, this.buffer.length);
    if (chunkToReturn.length > 0) {
      this.largestReturned = chunkToReturn[chunkToReturn.length - 1][0];
    };
    chunkToReturn = chunkToReturn.map(v => v[1]);
  }
  console.log("chunkToReturn", chunkToReturn, "largestReturned", this.largestReturned, "this.buffer", this.buffer);
  return chunkToReturn;

};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */