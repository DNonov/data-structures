function List() {
  this.container       = [];
  this.listSize        = 0;
  this.position        = 0;
  //this.clear           = clear;
  this.find            = find;
  this.display         = display;
  //this.insert          = insert;
  this.append          = append;
  //this.remove          = remove;
  //this.head            = head;
  //this.tail            = tail;
  //this.previus         = previus;
  //this.next            = next;
  this.length          = length;
  //this.currentPosition = currentPosition;
  //this.moveTo          = moveTo;
  //this.getElement      = getElement;
  this.length          = length;
  //this.contains        = contains;
}

function append(element){
  this.container[this.listSize++] = element;
}

function find(element) {
  return this.container.indexOf(element);
}

function remove(element) {
  const elementIndex = this.find(element);
  if (foundAt > -1) {
    this.container.splice(elementIndex, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function display() {
  return this.container;
}


module.exports = new List();