/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.words = {}
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this[word] = true
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (word.includes(".")) {
        word.indexOf(".")
    }
    if (this[word]) return true    
};

wordd = new WordDictionary()
wordd.addWord("yo")
console.log(wordd.search('y.'))


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */