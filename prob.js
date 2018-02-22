// let Dictionary = require('./src/dictionary');
// let Stack = require('./src/stack');
// let Queue = require('./src/queue');
// let Set = require('./src/set');
// // let fs = new Queue();

// // let Mathp = require('./src/add');

// // let myMath1 = new Mathp();
// // let myMath2 = new Mathp();

// // myMath1.push(1);
// // myMath2.push(2);
// // console.log(myMath1.display());
// // console.log(myMath2.display());

// // let List = require('./src/list');
// // let myList = new List();

// let myStack = new Stack();

// myStack.push('Jill');
// myStack.push('Bill');
// myStack.push(0);
// myStack.push(undefined);
// myStack.push(22);
// myStack.push(-12);

// // console.log(myStack.toArray());

// let myDictionary = new Dictionary();

// myDictionary.add(1, 'cat');
// myDictionary.add('cat', 1);
// myDictionary.add('cat', 2);
// // console.log(myDictionary.display()); 

// let mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(10);
// mySet.add(20);

// const speedTest = () => {
//   let mySet = new Set();
//   const start = Date.now();
//   for (let i = 0; i < 1000000000; i++) {
//     mySet.add(1);
//   }
//   const end = Date.now();
//   console.log(end - start);
// }


// //speedTest();        


let BST = require('./src/binarySearchTree');
let myBST = new BST();
let myBST1 = new BST();


myBST.insert(10);
myBST.insert(2);

myBST.insert(13);
myBST.insert(4);
myBST.insert(3);



myBST.remove(2);
myBST.remove(3);
console.log(myBST.inOrder());
console.log(myBST.find(10));
// console.log(myBST.min());
// console.log(myBST.max());
// console.log(myBST.find(4));
//console.log(myBST.root);



 



