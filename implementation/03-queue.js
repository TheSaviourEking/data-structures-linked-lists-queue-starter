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
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return ++this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;
        const head = this.head;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = this.head.next;
        }
        return head.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
// queue.enqueue('C');
console.log(queue.head.next.value);
// console.log(queue)
module.exports = {
    Queue,
    SinglyLinkedNode
}
