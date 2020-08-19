//the addChild and readTree functions are not actually necessary...
//also, there must be ways to do this without recursion!

/**
 * Initialize your data structure here.
 */

//28% 66%
var TrieNode = function (val = null, end = false) {
    this.val = val
    this.end = end
}

var Trie = function () {
    this.rootnode = new TrieNode(null, false)
};

Trie.prototype.insert = function (word) {
    var i = 0
    var addChild = function (node) {
        if (!node.hasOwnProperty([word[i]]))
            node[word[i]] = new TrieNode(word[i])
        if (i == word.length - 1) {
            node[word[i]].end = true
            return
        }
        i++
        addChild(node[word[i - 1]])
    }
    addChild(this.rootnode)
}

Trie.prototype.search = function (word) {
    var i = 0
    var readTree = function (node) {
        if (word[i] == node.val) {
            if (i == word.length - 1 && node.end == true) return true
            i++
            if (node.hasOwnProperty([word[i]])) return readTree(node[word[i]])
            else return false
        }
        else return false
    }
    if (this.rootnode.hasOwnProperty(word[0]))
        return readTree(this.rootnode[word[0]])
    else
        return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var i = 0
    var readTree = function (node) {
        if (prefix[i] == node.val) {
            if (i == prefix.length - 1) return true
            i++
            if (node.hasOwnProperty([prefix[i]])) return readTree(node[prefix[i]])
            else return false
        }
        else return false
    }
    if (this.rootnode.hasOwnProperty(prefix[0]))
        return readTree(this.rootnode[prefix[0]])
    else
        return false
};


trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("xerox");
console.log(trie.search('xer'))