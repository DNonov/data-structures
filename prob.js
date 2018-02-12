let Dictionary = require('./src/dictionary');
let stak = require('./src/stack');
let Queue = require('./src/queue');
let fs = new Queue();

let Mathp = require('./src/add');

let myMath1 = new Mathp();
let myMath2 = new Mathp();

myMath1.push(1);
myMath2.push(2);
console.log(myMath1.display());
console.log(myMath2.display());

