const Heap = require('./src/maxHeap');
const myHeap = new Heap();

myHeap.insert('Cat',22);
myHeap.insert('Bull',8);
myHeap.insert('Ass',3);
myHeap.insert('Ass',12);
myHeap.insert('Ass',5);
myHeap.insert('Lol',67);

console.log(myHeap.peek());