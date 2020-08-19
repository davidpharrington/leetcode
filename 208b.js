//the addChild and readTree functions are not actually necessary...
//also, there must be ways to do this without recursion!

/**
 * Initialize your data structure here.
 */

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
        if (i == word.length)
            return (node.end == true) ? true : false

        i++
        if (i == 1 || word[i - 2] == node.val)
            return readTree(node[word[i - 1]])
    }
    return readTree(this.rootnode)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var i = 0
    var readTree = function (node) {
        if (i == prefix.length) {
            console.log(i, prefix.length, 'i == prefix.length', node)
            return true
        }
        if (Boolean(node) && prefix[i] == node.val) {
            i++

            if (Boolean(node[prefix[i]])) {
                return readTree(node[prefix[i]])
            }
        } else {
            return false
        }
    }
    return readTree(this.rootnode[prefix[0]])
};

trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("xerox");
console.log(trie.startsWith('x'))
