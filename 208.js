/**
 * Initialize your data structure here.
 */

var TrieNode = function (character = null, endsWord = false) {
    this.character = character
    this.endsWord = endsWord
    this.children = {}
}

var Trie = function () {
    this.root = new TrieNode(null, false)
};

TrieNode.prototype.addChildCharacter = function (character) {
    if (this.children[character]) return
    let x = new TrieNode(character)
    this.children[character] = x
}
triee = new TrieNode('d', false)
triee.addChildCharacter('f')
triee.children.f.addChildCharacter('h')

console.log(triee.children.f.children.h)

Trie.prototype.insert = function (word) { //word is a string; return void
    [...word].forEach((v, i) => {
        //insertCharacter(v,this)
        if (this[v]) {

        }
        // if (i) {
        //     this.root.children[v] = true
        // }
        // else {
        // }
        // this.root.children[v] = true
    })
};

Trie.prototype.search = function (word) { //return boolean true/false

};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
