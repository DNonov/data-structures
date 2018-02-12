let Dictionary = require('./src/dictionary');
let Stack = require('./src/stack');
let Queue = require('./src/queue');
// let fs = new Queue();

// let Mathp = require('./src/add');

// let myMath1 = new Mathp();
// let myMath2 = new Mathp();

// myMath1.push(1);
// myMath2.push(2);
// console.log(myMath1.display());
// console.log(myMath2.display());

// let List = require('./src/list');
// let myList = new List();

let myStack = new Stack();

myStack.push('Jill');
myStack.push('Bill');
myStack.push(0);
myStack.push(undefined);
myStack.push(22);
myStack.push(-12);

console.log(myStack.toArray());