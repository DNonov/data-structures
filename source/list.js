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

/**
 * Appends element to the list.
 * 
 * @param {any} element 
 */
function append(element){
  this.container[this.listSize++] = element;
}

/**
 * Finds element in the list.
 * 
 * @param {any} element 
 * @returns element's position or -1 if it not present.
 */
function find(element) {
  return this.container.indexOf(element);
}

/**
 * Removes element from the list.
 * 
 * @param {any} element 
 * @returns true or false if the element it is not present.
 */
function remove(element) {
  const elementIndex = this.find(element);
  if (foundAt > -1) {
    this.container.splice(elementIndex, 1);
    --this.listSize;
    return true;
  }
  return false;
}

/**
 * Returns the length of the list.
 * 
 * @returns the length of the list.
 */
function length() {
  return this.listSize;
}

/**
 * Displays the list.
 * 
 * @returns array of the list elements.
 */
function display() {
  return this.container;
}


module.exports = new List();