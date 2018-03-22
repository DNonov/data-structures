const MinHeap = require('./minHeap');
/**
 * Priority Queue Max.
 * 
 * @example const PriorityQueueMin = require('dstructures').PriorityQueueMin;
 * const myPriorityQueueMin = new PriorityQueueMin();
 * @description This is "max" implementation so, larger numbers have priority!
 * For "min" implementation where lower numbers have priority, use PriorityQueueMin.
 * @description In computer science, a priority queue is an abstract data type 
 * which is like a regular queue or stack data structure, but where additionally 
 * each element has a "priority" associated with it. In a priority queue, an 
 * element with high priority is served before an element with low priority. If 
 * two elements have the same priority, they are served according to their order 
 * in the queue. Full wikipedia article at: 
 * {@link https://en.wikipedia.org/wiki/Priority_queue}
 * @public
 * @constructor
 * @class
 */
class  PriorityQueueMin {
  
  constructor(){
    // Underlying heap
    // @private
    this._heap = new MinHeap();
  }

  /**
   * Adds element in a priority queue.
   * 
   * @param {any} element Given element.
   * @param {Number} [priority = 0] Priority defaults to 0 if is not present.
   * @returns {Boolean|Void} Returns false if 'priority' is not number or 
   * 'element' is undefined or null.
   * @example PriorityQueueMin.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMin.enqueue('Dog', 2); // ['Dog', 'Cat']
   * @memberOf PriorityQueueMin
   */
  enqueue (element, priority) {
    if (typeof(priority) !== 'number') {
      priority = 0
    }
    if (!element) {
      return false;
    }
    this._heap.insert(element, priority);
  }

  /**
   *  Removes and returns the first element in a priority queue 
   * (the element with most priority).
   * 
   * @returns {Boolean|Any} Returns false if a priority queue is
   * empty, otherwise the first element in a priority queue.
   * @example PriorityQueueMin.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMin.enqueue('Dog', 2); // ['Dog', 'Cat']
   * PriorityQueueMin.enqueue('Fox', 3); // ['Fox', 'Dog', 'Cat']
   * PriorityQueueMin.dequeue(); // ['Dog', 'Cat']
   * @memberOf PriorityQueueMin
   */
  dequeue () {   
    return this._heap.remove();
  }

  /**
   * Returns the first element in a priority queue.
   * 
   * @returns {Boolean|Any} Returns false if a priority queue is
   * empty, otherwise the first element in a priority queue.
   * @example PriorityQueueMin.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMin.enqueue('Dog', 2); // ['Dog', 'Cat']
   * PriorityQueueMin.enqueue('Fox', 3); // ['Fox', 'Dog', 'Cat']
   * PriorityQueueMin.head();// 'Fox' , ['Fox', 'Dog', 'Cat']
   * @memberOf PriorityQueueMin
   */
  head () {      
    return this._heap.peek();
  }

  /**
   * Checks if a priority queue is empty.
   * 
   * @returns {Boolean} Returns true if a priority queue is empty,
   * otherwise fasle.
   * @example PriorityQueueMin.isEmpty(); // true
   * PriorityQueueMin.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMin.isEmpty(); // false
   * @memberOf PriorityQueueMin
   */
  isEmpty () {
    return this._heap.peek() === false ? true : false;
  }

  /**
   * Returns array representation of a priority queue.
   * 
   * @returns {Array} Returns array representation of a priority queue.
   * @memberOf PriorityQueueMin
   */
  toArray () {      
    return this._heap.toArray();
  }
}
module.exports = PriorityQueueMin;