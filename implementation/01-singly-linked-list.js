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
        // There are BUGS in this method! Fix them!!!

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
        if(!this.head) return undefined; // if no head return undefined
        const oldHead = this.head; // store old head
        this.head = this.head.next; // give old head the value of the next head
        this.length--; // decrement
        return oldHead; // return

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return undefined; // if no head, return undefined

        let curr = this.head; // store current head to curr
        let prev; // declare a 'previous' variable so we can constantly change it through our while loop iteration

        //we are traversing to the end of the list; the end of the list is when the next head === null
        while (curr.next) { // while there is still a next head, execute this loop
            prev = curr; // store current head as 'prev' previous
            curr = curr.next; // store the next head as the current head
        }

        if(!prev) this.head = null; // if no prev value, make the current head = null
        else prev.next = null; // else // make the prev.next to null
        this.length--; // increment
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        // console.log(this)
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    print() {
        // Print out the linked list
        if (!this.head) return;

        // Should console.log the values of the nodes in the linked list in order from head to tail
        // if there's a head execute the while loop inside
        let curr = this.head; // DO NOT USE CONST;
        //stores the current head

        //traverse the linkedlist
        while (curr) {//while there is still a current value aka if the next value isn't null that is stored into here, then continue the loop; if curr.next is null then is saved as curr; the loop will end
            console.log(curr.value) // curr.value is the value that we're outputting before we change it to the next one
            curr = curr.next; //change curr value to the next;
        }

        return;
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
