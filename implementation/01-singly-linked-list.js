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
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // this works in O(1) time and O(n) space;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // works in O(n) times because it depends on the length of the linked list

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (this.length <= 0) return undefined;
        const removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return removedHead;

        // Write your hypothesis on the time complexity of this method here
        // work in O(1) time complexity
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length <= 0) return undefined;
        if (this.length === 1) {
            let tail = this.head;
            this.head = null;
            this.length--;
            return tail;
        }
        let tail = this.head;
        while (tail.next.next) {
            tail = tail.next;
        }
        let removedTail = tail.next;
        tail.next = null;
        this.length--;
        return removedTail;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time complexity
    }

    peekAtHead() {
        // Return value of head node
        if (this.length <= 0) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // works in O(1) time complexity
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time complexity
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
