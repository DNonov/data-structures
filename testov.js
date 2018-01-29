let listIns = require('./source/list');
let list = new listIns();


list.append('Pesho');
list.append('Bylgar');
list.append('Unufri');

list.next();
list.next();
console.log(list.getElement());
list.head();
console.log(list.getElement());


console.log(list.display());