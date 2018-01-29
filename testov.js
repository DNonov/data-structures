let list = require('./source/list');

list.append('Pesho');
list.append('Bylgar');
list.append('Unufri');

list.next();
list.next();
console.log(list.getElement());
list.head();
console.log(list.getElement());


console.log(list.display());