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
    const head = new Node('head');
    const tail = new Node('tail');

    this.getTail = () => tail;
    this.getHead = () => head;
    
    this.getHead().next     = this.getTail();
    this.getTail().previous = this.getHead();
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
   * @param {any} newElement Given element.
   * @param {any} [oldElement = head] 'oldElement' argument defaults to 'head' if 
   * is not present, and inserts at the head of doubly linked list.  
   * @returns {Boolean|Void} Returns false if the 'newElement' argument is not present.
   * @example DoublyLinkedList.insert(1); // [1]
   * DoublyLinkedList.insert(2, 1); // [1] -> [2]
   * DoublyLinkedList.insert(3, 1); // [1] -> [3] -> [2]
   * DoublyLinkedList.insert(4); // [4] -> [1] -> [3] -> [2]
   */
  insert (newElement, oldElement) {
    oldElement   = oldElement || 'head';
    if (!newElement) {return false;}

    let newNode  = new Node(newElement);
    let current  = this._find(oldElement);

    if (current === false) {
      return false;
    }

    if (this.getHead().next.element === 'tail') {
      return this.append(newElement);
    }

    newNode.next     = current.next;
    newNode.previous = current;
    current.next     = newNode;
  }

  /**
   * Appends element to a doubly linked list.
   * 
   * @param {any} element Given element.
   * @returns {Boolean|Void} Returns false if 'element' argument is not present.
   * @example DoublyLinkedList.append(1); // [1]
   * DoublyLinkedList.append(2); // [1] -> [2]
   * DoublyLinkedList.append(3); // [1] -> [2] -> [3]
   * @memberOf DoublyLinkedList
   */
  append (element) {
    if (!element) {
      return false;
    }

    const newNode  = new Node(element);
    const current  = this.getTail(); 

    newNode.previous      = current.previous;
    current.previous.next = newNode;
    newNode.next          = current;
    current.previous      = newNode;
  }
  
  /**
   * Removes element from a doubly linked list.
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
    let currentNode  = this.getHead();
    while (currentNode.next.next !== null) {
      resultArray.push(currentNode.next.element);
      currentNode = currentNode.next;
    }
    return resultArray;
  }

  _find (element) {
    let currentNode = this.getHead();
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