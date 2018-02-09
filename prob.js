let Dictionary = require('./src/dictionary');
let stak = require('./src/stack');

let opa = new Dictionary();

opa.add('az' ,1);
opa.add('ti' ,2);
opa.add('toi' ,3);
opa.add('tq' ,4);
opa.add('to' ,5);

console.log(opa.display());
console.log(opa.count());
