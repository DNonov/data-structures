/**
 * Doubly Linked list function constructor.
 * 
 * @example const DoublyLinkedList = require('dstructures').DoublyLinkedList;
 * const myDoublyLinkedList = new DoublyLinkedList();
 * @description In computer science, a doubly linked list is a linked data 
 * structure that consists of a set of sequentially linked records called 
 * nodes. Each node contains two fields, called links, that are references 
 * to the previous and to the next node in the sequence of nodes. The beginning 
 * and ending nodes' previous and next links, respectively, point to some kind 
 * of terminator, typically a sentinel node or null, to facilitate traversal 
 * of the list. Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Doubly_linked_list}
 * @public
 * @constructor
 */
function DoublyLinkedList() {
  let head = new Node('head');



  // Node function constructor.
  function Node(element) {
    this.element = element;
    this.next    = null;
    this.previous = null;
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
    console.error(`LinkedList.find(): Cannot find ${element}!`);
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
   * @example DoublyLinkedList.insert(1); // [1]
   * DoublyLinkedList.insert(2, 1); // [1] -> [2]
   * DoublyLinkedList.insert(3, 2); // [1] -> [2] -> [3]
   */
  this.insert = function (newElement, oldElement) {
    oldElement   = oldElement || 'head';
    let newNode  = new Node(newElement);
    let current  = _find(oldElement);
      if (current === false) {
        console.error(`LinkedList.insert(): Cannot find ${oldElement}!`);
        return false;
      }
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  /**
   * Returns array representation of the linked list.
   * 
   * @returns {Array} Returns array representation of the Doubly linked list. 
   * @example DoublyLinkedList; // ['cat'] -> ['pig'] -> ['dog']
   * DoublyLinkedList.toArray(); // ['cat', 'pig', 'dog']
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
   * Removes element from a linked list.
   * 
   * @param {any} element Element that will be removed.
   * @returns {Boolean} Returns false if the element is not present.
   * @example DoublyLinkedList; // [1] -> [2] -> [3]
   * DoublyLinkedList.remove(2); // [1] -> [3]
   */
  this.remove = function (element) {
    let currentNode = _find(element);
    if (currentNode.next !== null) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
    }
    console.error(`LinkedList.remove(): Cannot find ${element}!`);
    return false;
  }
}
module.exports = DoublyLinkedList;


