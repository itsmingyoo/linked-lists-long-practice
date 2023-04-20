// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // console.log('this      ======', this);
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            newNode.next = this.head;
            this.head.prev = newNode;
            
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return newNode;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            //pointers
            newNode.prev = this.tail;
            this.tail.next = newNode;

            //reassign the tail value to the new node
            this.tail = newNode;

        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;


        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromHead() {
        if (!this.head) return undefined; // if no head, return undefined

        //locate the head
        const curryHead = this.head; // this.head is the head
        const curryHeadVal = this.head.value;

        //non-empty list
        if (curryHead.next) {//if theres a next value, set the current head pointer to the next node
            this.head = this.head.next;//sets new head value to the next
            this.head.prev = null;//sets prev value to null
            this.length--; //decrement
        } else {//dumbass make an else statement in case there is only 1 item
            this.head = null;
            this.length--; //decrement
        }

        return curryHeadVal; //return the removed head's value

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (!this.length) return undefined; // first check
        const valueofTail = this.tail.value;
        // Should remove the tail node from the list and return the node's value
        // const currTail = this.tail; //this doesn't work, must set the below code this.tail = this.tail.prev outside the conditional first
        this.tail = this.tail.prev;//set this.tail to point to the prev (left)

        // Should set the NEXT POINTER on the new tail to be null
        if (this.tail) {//if prev exists
            this.tail.next = null; //delete tail
        }

        //dont need this commented code below, it was ptsd from removefromhead
        // } else {//if no prev value, then set to null
        //     this.tail.next = null;//delete tail
        // }

        // Should update the length for a non-empty list
        this.length--;

        //return value
        return valueofTail;





        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.length) return undefined;
        if (this.head) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if (!this.length) return undefined;

        if (this.tail) {
            return this.tail.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
