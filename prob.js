let LinkedList = require('./src/linkedList');

let opa = new LinkedList();

opa.insert(1, 'head');
opa.insert(2, 1);
opa.insert(3, 2);
console.log(opa.toArray());
opa.insert(3, 2);
opa.remove(2);
console.log(opa.toArray());