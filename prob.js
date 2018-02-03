const List = require('./source/list');

let test = new List();

test.append(1).append(2);

console.log(test.display());