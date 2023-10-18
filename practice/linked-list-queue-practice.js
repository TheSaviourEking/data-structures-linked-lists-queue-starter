// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // in O(n) time 
        /** 
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
        */

        // in O(1) time
        return this.length;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        while (this.head) {
            sum += this.head.value;
            this.head = this.head.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time because of the overhead from sumOfNodes()
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === n) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let index = Math.floor((this.listLength() - 1) / 2);

        return this.findNthNode(index);

        // Write your hypothesis on the time complexity of this method here
        // the singlyLinkedList version would work in O(n) time
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // create a new List;
        let newList = new SinglyLinkedList();
        for (let i = this.length - 1; i >= 0; i--) {
            newList.addToTail(this.findNthNode(i).value);
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return this.head;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        let slow_ptr = this.head;
        let fast_ptr = this.head;

        while (fast_ptr && fast_ptr.next?.next) {
            slow_ptr = slow_ptr.next;
            fast_ptr = fast_ptr.next.next;

        }
        return slow_ptr;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time, but faster than the singlyLinkedList implementation of findMid();
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        let current = this.tail;
        while (current) {
            newList.addToTail(current.value)
            current = current.prev;
        }
        return newList;


        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this.head = prev;

        // Write your hypothesis on the time complexity of this method here
        // works in O(n) time because we traversing the whole list
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
