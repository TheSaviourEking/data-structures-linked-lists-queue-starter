const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (this.length <= 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time;
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (this.length <= 0) return null;
        let dequeued = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return dequeued.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
