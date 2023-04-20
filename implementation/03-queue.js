const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) { // push to the end of the list
        // Add node to end of queue (linked list) push method
        const newNode = new SinglyLinkedNode(val);

        //Should reassign only the tail pointer when new nodes are added to the tail of the queue of size one or greater
        if (this.length >= 1) {
            this.head = this.head.next;
            while (this.tail.prev) {
                //cbt
                newNode.prev = this.tail;
                this.tail.next = newNode;

                this.tail = newNode;
            }

        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list) shift method

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
