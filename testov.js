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

list.insert('polya', 'Pesho')
console.log(list.display());
console.log(list.contains('Pesho'));