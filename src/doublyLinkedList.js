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
class DoublyLinkedList {
  
  constructor(){
    this.head = new Node('head');   
  }
  
  /**
   * Returns the element property of the given node.
   * 
   * @param {any} element Element property of the node.
   * @returns Returns the element property of the node.
   */
  GetElement (element) {
    return this._find(element).element;
  }
  
  /**
   * Inserts a node in a doubly linked list.
   * 
   * @param {any} newElement The element that will be inserted.
   * @param {any} oldElement The old element after whitch the new element will be added.
   * At the first insertion this argument have to be ommited.  
   * @returns {Boolean|Void} Returns false if the element is not present.
   * @example DoublyLinkedList.insert(1); // [1]
   * DoublyLinkedList.insert(2, 1); // [1] -> [2]
   * DoublyLinkedList.insert(3, 2); // [1] -> [2] -> [3]
   */
  insert (newElement, oldElement) {
    oldElement   = oldElement || 'head';
    let newNode  = new Node(newElement);
    let current  = this._find(oldElement);
    if (current === false) {
      return false;
    }
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }
  
  /**
   * Removes element from a linked list.
   * 
   * @param {any} element Element that will be removed.
   * @returns {Boolean} Returns false if the element is not present.
   * @example DoublyLinkedList; // [1] -> [2] -> [3]
   * DoublyLinkedList.remove(2); // [1] -> [3]
   */
  remove (element) {
    let currentNode = this._find(element);
    if (currentNode.next !== null && currentNode !== false) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
    }
    return false;
  }
  
  /**
   * Returns array representation of a doubly linked list.
   * 
   * @returns {Array} Returns array representation of the Doubly linked list. 
   * @example DoublyLinkedList; // ['cat'] -> ['pig'] -> ['dog']
   * DoublyLinkedList.toArray(); // ['cat', 'pig', 'dog']
   */
  toArray () {
    let resultArray  = [];
    let currentNode  = this.head;
    while (currentNode.next !== null) {
      resultArray.push(currentNode.next.element);
      currentNode = currentNode.next;
    }
    return resultArray;
  }

  _find (element) {
    let currentNode = this.head;
    while (currentNode.element !== element  && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    if (currentNode.element === element) {
      return currentNode;
    }
    return false;
  }
  
}

// Node function constructor.
//  @private
function Node(element) {
  this.element = element;
  this.next    = null;
  this.previous = null;
}

module.exports = DoublyLinkedList