let LinkedList = require('./src/linkedList');
let stak = require('./src/stack');

let opa = new LinkedList();

opa.insert(1, 'head');
opa.insert(2, 1);
opa.insert(3, 5);
console.log(opa.toArray());
opa.insert(3, 2);
opa.remove(2);
opa.insert(1, 1);
opa.insert(2, 3)
console.log(opa.toArray());
console.log(opa.find(23));

let rrt = new stak();
