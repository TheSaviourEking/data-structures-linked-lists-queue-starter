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
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        // let newNode = new SinglyLinkedNode(data);
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
        if (!this.head) return undefined;
        else if (this.length === 1) {
            this.head = null;
            this.length--;
        }
        else {
            let head = this.head;
            this.head = this.head.next;
            this.length--;
            return head;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;
        else if (this.length === 1) {
            let tail = this.head;
            this.head = null;
            this.length--;
            return tail;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            let tail = current.next;
            current.next = null;
            this.length--;
            return tail;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head) return;
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
