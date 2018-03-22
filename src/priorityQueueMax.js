const MaxHeap = require('./maxHeap');
/**
 * Priority Queue Max.
 * 
 * @example const PriorityQueueMax = require('dstructures').PriorityQueueMax;
 * const myPriorityQueueMax = new PriorityQueueMax();
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
class  PriorityQueueMax {
  
  constructor(){
    // Underlying heap
    // @private
    this._heap = new MaxHeap();
  }

  /**
   * Adds element in a priority queue.
   * 
   * @param {any} element Given element.
   * @param {Number} [priority = 0] Priority defaults to 0 if is not present.
   * @returns {Boolean|Void} Returns false if 'priority' is not number or 
   * 'element' is undefined or null.
   * @example PriorityQueueMax.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMax.enqueue('Dog', 2); // ['Dog', 'Cat']
   * @memberOf PriorityQueueMax
   */
  enqueue (element, priority) {
    if (!element || typeof(priority) !== 'number') {
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
   * @example PriorityQueueMax.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMax.enqueue('Dog', 2); // ['Dog', 'Cat']
   * PriorityQueueMax.enqueue('Fox', 3); // ['Fox', 'Dog', 'Cat']
   * PriorityQueueMax.dequeue(); // ['Dog', 'Cat']
   * @memberOf PriorityQueueMax
   */
  dequeue () {   
    return this._heap.remove();
  }

  /**
   * Returns the first element in a priority queue.
   * 
   * @returns {Boolean|Any} Returns false if a priority queue is
   * empty, otherwise the first element in a priority queue.
   * @example PriorityQueueMax.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMax.enqueue('Dog', 2); // ['Dog', 'Cat']
   * PriorityQueueMax.enqueue('Fox', 3); // ['Fox', 'Dog', 'Cat']
   * PriorityQueueMax.head();// 'Fox' , ['Fox', 'Dog', 'Cat']
   * @memberOf PriorityQueueMax
   */
  head () {      
    return this._heap.peek();
  }

  /**
   * Checks if a priority queue is empty.
   * 
   * @returns {Boolean} Returns true if a priority queue is empty,
   * otherwise fasle.
   * @example PriorityQueueMax.isEmpty(); // true
   * PriorityQueueMax.enqueue('Cat', 1); // ['Cat']
   * PriorityQueueMax.isEmpty(); // false
   * @memberOf PriorityQueueMax
   */
  isEmpty () {
    return this._heap.peek() === false ? true : false;
  }

  /**
   * Returns array representation of a priority queue.
   * 
   * @returns {Array} Returns array representation of a priority queue.
   * @memberOf PriorityQueueMax
   */
  toArray () {      
    return this._heap.toArray();
  }
}
module.exports = PriorityQueueMax;