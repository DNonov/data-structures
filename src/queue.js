/**
 * Queue function constructor.
 * 
 * @example let myQueue = new Queue(); 
 * @description In computer science, a queue (/ˈkjuː/ KYEW) is a particular
 * kind of abstract data type or collection in which the entities in the 
 * collection are kept in order and the principle (or only) operations on 
 * the collection are the addition of entities to the rear terminal position, 
 * known as enqueue, and removal of entities from the front terminal position, 
 * known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. 
 * In a FIFO data structure, the first element added to the queue will be the 
 * first one to be removed. Full wikipedia article at: 
 * {@link https://en.wikipedia.org/wiki/Queue_(abstract_data_type)}
 * @public
 * @constructor
 */
function Queue() {
  let _container = [];
  //TODO: Add all console.errors.

  /**
   * Adds element in a queue.
   * 
   * @param {any} element Element that will be added.
   * @example [] Queue.enqueue(1); // [1]
   * [1] Queue.enqueue(2); // [1, 2]
   */
  this.enqueue = function(element) {
    _container.push(element);
  }

  /**
   * Removes and returns the first element in a queue.
   * 
   * @returns Returns the removed element if the queue is not empty, otherwise returns false.
   * @example [1, 2, 3] Queue.dequeue(); // [2, 3]
   * [2, 3] Queue.dequeue(); // [3]
   */
  this.dequeue = function () {
    if (_container.length !== 0) {
      return _container.shift();
    }
    return false;
  }

  /**
   * Returns the first element in a queue.
   * 
   * @returns Returns the first element if the queue is not empty, otherwise returns false.
   * @example [1, 2, 3] Queue.head(); // 1
   * ['Cat', 'Dog', 'Pig'] Queue.head(); // 'Cat'
   */
  this.head = function () {
    if (_container.length !== 0) {
      return _container[0];
    }
    return false;
  }

  /**
   * Returns the last element in a queue.
   * 
   * @returns Returns the last element if the queue is not empty, otherwise returns false.
   * @example [1, 2, 3] Queue.tail(); // 3
   * ['Cat', 'Dog', 'Pig'] Queue.tail(); // 'Pig'
   */
  this.tail = function () {
    if (_container.length !== 0) {
      return _container[_container.length - 1];
    }
    return false;  
  }

  /**
   * Returns true if queue is empty.
   * 
   * @returns Returns true if queue is empty, otherwise returns false.
   * @example [] Queue.empty(); // true
   * [1, 2] Queue.empty(); // false
   */
  this.isEmpty = function () {
    if (_container.length === 0) {
      return true;
    }
    return false;
  }

  /**
   * Returns array representation of a queue.
   * 
   * @returns Array representation of a queue.
   */
  this.toArray = function () {
    return _container;
  }
}
module.exports = Queue;