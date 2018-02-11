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
*/


/**
 * Linked list function constructor.
 * 
 */
function LinkedList() {
  this.head = new Node('head');
}

/**
 * Node function constructor.
 * 
 * @param {any} element Node's data.
 */
function Node(element) {
  this.element = element;
  this.next    = null;
}

/**
 * Finds node.
 * 
 * @param {any} element Element property of the node.
 * @returns Returns the node.
 */
LinkedList.prototype.find = function (element) {
  let currentNode = this.head;
  while (currentNode.element !== element  && currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  if (currentNode.element === element) {
    return currentNode;
  }
  console.error(`LinkedList.find(): Cannot find ${element}!`);
  return false;
}

/**
 * Simple wrapper, that makes function find easier to test.
 * 
 * @param {any} element Element property of the node.
 * @returns Returns the element property of the node.
 */
LinkedList.prototype._findGetElement = function (element) {
  return this.find(element).element;
}

/**
 * Inserts a node in a linked list.
 * 
 * @param {any} newElement The element that will be inserted.
 * @param {any} oldElement The old element after whitch the new element will be added. 
 * @returns 
 */
LinkedList.prototype.insert = function (newElement, oldElement) {
  let newNode  = new Node(newElement);
  let current  = this.find(oldElement);
    if (current === false) {
      console.error(`LinkedList.insert(): Cannot find ${oldElement}!`)
      return false;
    }
  newNode.next = current.next;
  current.next = newNode;
}

LinkedList.prototype.toArray = function () {
  let resultArray  = [];
  let currentNode  = this.head;
  while (currentNode.next !== null) {
    resultArray.push(currentNode.next.element);
    currentNode = currentNode.next;
  }
  return resultArray;
}

LinkedList.prototype.findPrevius = function (element) {
  let currentNode = this.head;
  while (!(currentNode.next === null) && (currentNode.next.element !== element)) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

LinkedList.prototype.remove = function (element) {
  let previusNode = this.findPrevius(element)
  if (previusNode.next !== null) {
    previusNode.next = previusNode.next.next;
  }
  console.error(`LinkedList.remove(): Cannot find ${element}!`);
  return false;
}

module.exports = LinkedList;


