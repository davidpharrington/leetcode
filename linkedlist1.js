// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

var a = new Node(5)
console.log(a)

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        var node = new Node(element);
        var current;
        
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, location) {

    }
    removeFrom(location) {

    }
    removeElement(element) {

    }
    isEmpty() {
        return (this.head = null && this.size === 0) ? true : false
    }
    size_Of_List() {
        return this.size
    }
    PrintList (){
        current = this.head
        while (this.next) {
            console.log(current);
            current = node.next;
        }
    }
}