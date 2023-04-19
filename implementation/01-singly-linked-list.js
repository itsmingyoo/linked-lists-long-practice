// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const ll = new SinglyLinkedNode(val); //create new ll node
        ll.next = this.head; //newly created node, look at old head
        this.head = ll; //old head will be new head
        this.length++;//increment
        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        return this;

        // Write your hypothesis on the time complexity of this method here
        // o(1)
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return undefined;

        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if(!prev) this.head = null;
        else prev.next = null;
        this.length--;
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
