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
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (this.length === 0) return undefined;
        // Remove node at head
        if (this.length === 1) {
            const head = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return head.value;
        }
        else {
            const head = this.head;
            this.head = this.head.next;
            this.head.prev = null;

            this.length--;
            return head.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return undefined;
        const removedTail = this.tail;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedTail.prev;
            this.tail.next = null;
        }

        return removedTail.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return undefined;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

let doubleLinkedList = new DoublyLinkedList();
doubleLinkedList.addToHead('C');
doubleLinkedList.addToHead('B');
doubleLinkedList.addToHead('A');
// doubleLinkedList.addToTail('A');
// doubleLinkedList.addToTail('B');
// doubleLinkedList.addToTail('C');
// doubleLinkedList.removeFromHead();
// doubleLinkedList.removeFromHead();
// doubleLinkedList.removeFromHead();
// console.log(doubleLinkedList.removeFromHead());
// console.log(doubleLinkedList.removeFromHead());
// console.log(doubleLinkedList.removeFromHead());
// let tail = doubleLinkedList.tail;
// let head = doubleLinkedList.head;
// let middle = doubleLinkedList.tail.prev;
// console.log(tail.prev.value, head.next.value);
// console.log(head.prev)

// console.log(doubleLinkedList.length)
// console.log(doubleLinkedList);
module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
