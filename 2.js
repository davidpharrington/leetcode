cl = function(...args) {console.log(...args)}
class Node {
    constructor () {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        var node = new Node(element);
        var current;
    
        if (this.head) {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }

    insertAt(element, index)
    {
        if (index > this.size)
            return false;
        else {
            var node = new Node(element);
            var curr, prev;

            curr = this.head;
            
            if (index==0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

            }

        }
    }

}






class Node {
    constructor() {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    // constructor
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element)
    var(node) = new Node(element);

    var current;

    if(this.head==null) 
        this.head=node;
    else {
        current=this.head;
        while(current.next) {
            current=current.next;
        }
        current.next = node;
    }
    this.size++;

    //need to implement
    //add(element)
    //insertAt(element,location)
    //removeFrom(location)
    //removeElement(element)

    //helper methods
    //isEmpty
    //sizeOfList
    //printList

}
























