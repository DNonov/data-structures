/**
 * Linked list function constructor.
 * 
 * @example const LinkedList = require('dstructures').LinkedList;
 * const myLinkedList = new LinkedList();
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


  
  // Node function constructor.
  function Node(element) {
    this.element = element;
    this.next    = null;
  }

  
  // Finds given node.
  const _find = function (element) {
    let currentNode = head;
    while (currentNode.element !== element  && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    if (currentNode.element === element) {
      return currentNode;
    }
    return false;
  }

  /**
   * Returns the element property of the given node.
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
   * @returns {Boolean} Returns false if the element is not present.
   * @example LinkedList.insert(1); // [1]
   * LinkedList.insert(2, 1); // [1] -> [2]
   * LinkedList.insert(3, 2); // [1] -> [2] -> [3]
   */
  this.insert = function (newElement, oldElement) {
    oldElement   = oldElement || 'head';
    let newNode  = new Node(newElement);
    let current  = _find(oldElement);
      if (current === false) {
        return false;
      }
    newNode.next = current.next;
    current.next = newNode;
  }

  /**
   * Returns array representation of the linked list.
   * 
   * @returns {Array} Returns array representation of the linked list. 
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

  
  // Helper function used by remove function.  
  const _findprevious = function (element) {
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
   * @returns {Boolean} Returns false if the element is not present.
   * @example LinkedList; // [1] -> [2] -> [3]
   * LinkedList.remove(2); // [1] -> [3]
   */
  this.remove = function (element) {
    let previousNode = _findprevious(element)
    if (previousNode.next !== null) {
      previousNode.next = previousNode.next.next;
    }
    return false;
  }
}
module.exports = LinkedList;


