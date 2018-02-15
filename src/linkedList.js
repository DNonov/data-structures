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

const chalk = require('chalk');
const error = chalk.bgRed;

/**
 * Linked list function constructor.
 * 
 * @example let myLinkedList = new LinkedList();
 * @description In computer science, a linked list is a linear collection of data elements, 
 * in which linear order is not given by their physical placement in memory. Instead, each element
 *  points to the next. It is a data structure consisting of a group of nodes which together represent 
 * a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) 
 * to the next node in the sequence. Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Linked_list}
 * @public
 * @constructor
 */
function LinkedList() {
  let head = new Node('head');


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
   * Finds given node.
   * 
   * @param {any} element Element property of the node.
   * @returns Returns the node.
   */
  const _find = function (element) {
    let currentNode = head;
    while (currentNode.element !== element  && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    if (currentNode.element === element) {
      return currentNode;
    }
    console.error(error(`LinkedList.find(): Cannot find ${element}!`));
    return false;
  }

  /**
   * Simple wrapper, that makes function find easier to test.
   * 
   * @param {any} element Element property of the node.
   * @returns Returns the element property of the node.
   */
  this.GetElement = function (element) {
    return _find(element).element;
  }

  /**
   * Inserts a node in a linked list.
   * 
   * @param {any} newElement The element that will be inserted.
   * @param {any} oldElement The old element after whitch the new element will be added.
   * At the first insertion this argument have to be ommited.  
   * @returns Returns false if the element is not present.
   * @example LinkedList.insert(1); // [1]
   * LinkedList.insert(2, 1); // [1] -> [2]
   * LinkedList.insert(3, 2); // [1] -> [2] -> [3]
   */
  this.insert = function (newElement, oldElement) {
    oldElement   = oldElement || 'head';
    let newNode  = new Node(newElement);
    let current  = _find(oldElement);
      if (current === false) {
        console.error(error(`LinkedList.insert(): Cannot find ${oldElement}!`));
        return false;
      }
    newNode.next = current.next;
    current.next = newNode;
  }

  /**
   * Returns array representation of the linked list.
   * 
   * @returns Returns array representation of the linked list. 
   * @example LinkedList; // ['cat'] -> ['pig'] -> ['dog']
   * LinkedList.toArray(); // ['cat', 'pig', 'dog']
   */
  this.toArray = function () {
    let resultArray  = [];
    let currentNode  = head;
    while (currentNode.next !== null) {
      resultArray.push(currentNode.next.element);
      currentNode = currentNode.next;
    }
    return resultArray;
  }

  /**
   * Helper function used by remove function.
   * 
   * @param {any} element 
   * 
   */
  const _findPrevius = function (element) {
    let currentNode = head;
    while (!(currentNode.next === null) && (currentNode.next.element !== element)) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * Removes element from a linked list.
   * 
   * @param {any} element Element that will be removed.
   * @returns Returns false if the element is not present.
   * @example LinkedList; // [1] -> [2] -> [3]
   * LinkedList.remove(2); // [1] -> [3]
   */
  this.remove = function (element) {
    let previusNode = _findPrevius(element)
    if (previusNode.next !== null) {
      previusNode.next = previusNode.next.next;
    }
    console.error(error(`LinkedList.remove(): Cannot find ${element}!`));
    return false;
  }
}
module.exports = LinkedList;


