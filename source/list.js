/*
* MIT License
*
* Copyright (c) 2018 Dimitar Nonov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

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
 * @param {any} element Element that will be append.
 * @returns Returns the list object for method chaining.
 * @example List.append(2).append(4); // [2, 4]
 */
function append(element){
  this.container[this.listSize++] = element;
  return this;
}

/**
 * Finds element in the list.
 * 
 * @param {any} element Element that will be found or not.
 * @returns Returns element's position or -1 if it not present.
 */
function find(element) {
  return this.container.indexOf(element);
}

/**
 * Removes element from the list.
 * 
 * @param {any} element Element that will be removed.
 * @returns Returns true or false if the element it is not present.
 */
function remove(element) {
  const elementPosition = this.find(element);
  if (elementPosition > -1) {
    this.container.splice(elementPosition, 1);
    --this.listSize;
    return true;
  }
  console.error('List.remove: Argument not found in the List!');
  return false;
}

/**
 * Returns the length of the list.
 * 
 * @returns Rreturns the length of the list.
 */
function length() {
  return this.listSize;
}

/**
 * Displays the list.
 * 
 * @returns Returns array of the list elements.
 */
function display() {
  return this.container;
}

/**
 * Inserts element in the list.
 * 
 * @param {any} element Element to insret in the list. 
 * @param {any} insertPosition Element after witch the insertion element will be inserted.
 * @returns Returns true or false if the element it is not present. 
 */
function insert(element, insertPosition) {
  const elementPosition = this.find(insertPosition);
  if (elementPosition > -1) {
    this.container.splice(elementPosition + 1, 0, element);
    ++this.listSize;
    return true;
  }
  console.error('List.insert: Wrong or less arguments!');
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
 * Detrming if given element is in the list.
 * 
 * @param {any} element
 * @returns Returns true or false if the element it is not present.
 * 
 */
function contains(element) {
  for (let i = 0; i < this.container.length; i++) {
    if (this.container[i] === element) {
      return true;
    }
  }
  console.error('List.contains: Argument not found in the List!');
  return false;
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
 * @returns Returns current position.
 */
function currentPosition() {
  return this.position;
}

/**
 * Moves to the passed position.
 * 
 * @param {any} position Position that you want to move on.
 */
function moveTo(position) {
  if (position < this.listSize) {
    this.position = position;
  }
  console.error('List.moveTo: Out of range argument!');
  return false;
}

/**
 * Returns the current element
 * 
 * @returns Returns current element.
 */
function getElement() {
  if (this.container[0] !== undefined ) {
    return this.container[this.position];
  }
  console.error('List.getElement: Empty List!');
  return false;
}

module.exports = List;