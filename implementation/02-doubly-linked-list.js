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
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
        if (this.length <= 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time;
    }

    removeFromHead() {
        // Remove node at head
        if (this.length <= 0) return undefined;
        let currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return currentHead.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length <= 0) return undefined;
        let removedTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedTail.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time;
    }

    peekAtHead() {
        // Return value of head node
        if (this.length <= 0) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length <= 0) return undefined;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
