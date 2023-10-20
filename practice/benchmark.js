let { SinglyLinkedList, DoublyLinkedList } = require('./linked-list-queue-practice.js');

let iteration = 10000;
let runs = 10;

let sll = new SinglyLinkedList();
const dll = new DoublyLinkedList();

function runTest(testFunc, name, list, runs) {
    let totalTime = 0;
    for (let j = 0; j < runs; j++) {
        let startTime = performance.now();
        for (let i = 0; i < iteration; i++) {
            testFunc.call(list, i);
        }
        let endTime = performance.now();
        totalTime += endTime - startTime;
    }
    console.log(name + '.' + testFunc.name + ':', totalTime / runs, 'ms');
}

runTest(sll.addToTail, 'sll', sll, runs);
runTest(dll.addToTail, 'dll', dll, runs);
runTest(sll.findMid, 'sll', sll, runs);
runTest(dll.findMid, 'dll', dll, runs);
runTest(sll.reverse, 'sll', sll, runs);
runTest(dll.reverse, 'dll', dll, runs);
runTest(sll.reverseInPlace, 'sll', sll, runs);
runTest(dll.reverseInPlace, 'dll', dll, runs);
