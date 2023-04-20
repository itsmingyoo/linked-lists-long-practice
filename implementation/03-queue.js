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
        //this assignment puts very high emphasis on the part where you only change the tail pointer IF the fucking new node is added to the god damn tail
        if (this.length >= 1) { // if length is greater than or equal to 1, execute this

            //we MUST use this.head to traverse if we don't have prev aka singlylinkedlists
            let curr = this.head; // assign curr to this.head ;
            while (curr.next) { // traverse if curr.next exists aka this.head.next exists aka if next node is not null
                curr = curr.next; // this is essentially i++ until curr.next does not exist or is null
            }
            //bc we found that curr.next is null, we exit the loop
            curr.next = newNode;//1. assign curr.next to the newNode
            this.tail = newNode;//2. change tail pointer to the newNode
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
        if (!this.length) return null; //if length === 0 return null

        const headValue = this.head.value; //store and return this original head value

        if (this.length === 1) {//if length is 1 or there is only 1 item, set both head/tail to null
            this.head = null;//remove head
            this.tail = null;//remove tail
        }
        if (this.length >= 2) {//if length >= 2
            this.head = this.head.next;//set new current value to the next node's head value
            // this.head = null;
        }
        this.length--;//decrement
        return headValue;//return the original headValue;

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
