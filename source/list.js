function List() {
  this.container       = [];
  this.listSize        = 0;
  this.position        = 0;
  this.clear           = clear;
  this.find            = find;
  this.display         = display;
  this.insert          = insert;
  this.append          = append;
  this.remove          = remove;
  this.head            = head;
  this.tail            = tail;
  this.previus         = previus;
  this.next            = next;
  this.length          = length;
  this.currentPosition = currentPosition;
  this.moveTo          = moveTo;
  this.getElement      = getElement;
  this.contains        = contains;
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
  const elementPosition = this.find(element);
  if (elementPosition > -1) {
    this.container.splice(elementPosition, 1);
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

/**
 * Inserts element in the list.
 * 
 * @param {any} element to insret in the list. 
 * @param {any} insertPosition after witch the element will be inserted.
 * @returns true or false if the element it is not present. 
 */
function insert(element, insertPosition) {
  const elementPosition = this.find(insertPosition);
  if (elementPosition > -1) {
    this.container.splice(elementPosition + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

/**
 * Deletes all elements in the list.
 * 
 */
function clear() {
  delete this.container;
  this.container = [];
  this.listSize = this.position = 0;
}

/**
 * Detrming if given value is in list.
 * 
 * @param {any} element 
 */
function contains(element) {
  container.forEach(containerElement => {
    if (element === containerElement) {
      return true;
    }
    return false;
  });
}

/**
 * Goes to the first element in the list.
 * 
 */
function head() {
  this.position = 0;
}

/**
 * Goes to the last element of the list.
 * 
 */
function tail() {
  this.position = this.listSize - 1;
}

/**
 * Goes to the previus element in the list.
 * 
 */
function previus() {
  if (this.position > 0) {
    --this.position;
  }
}

/**
 * Goes to the next element in the list.
 * 
 */
function next() {
  if (this.position < this.listSize - 1) {
    ++this.position;
  }
}

/**
 * Returns current position in the list.
 * 
 * @returns current position.
 */
function currentPosition() {
  return this.position;
}

/**
 * Move to the passed position.
 * 
 * @param {any} position that you want to move on.
 */
function moveTo(position) {
  this.position = position;
}

/**
 * Returns the current element
 * 
 * @returns current element.
 */
function getElement() {
  return this.container[this.position];
}

module.exports = new List();