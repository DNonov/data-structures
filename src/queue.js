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
 * first one to be removed. Full wikipedia article at: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 * 
 */
function Queue() {
  this._container = [];
}

/**
 * Adds element in a queue.
 * 
 * @param {any} element Element that will be added.
 * @example [] Queue.enqueue(1); // [1]
 *          [1] Queue.enqueue(2); // [1, 2]
 */
Queue.prototype.enqueue = function(element) {
  this._container.push(element);
}

/**
 * Removes and returns the first element in a queue.
 * 
 * @returns Returns the removed element if the queue is not empty, otherwise returns false.
 * @example [1, 2, 3] Queue.dequeue(); // [2, 3]
 *          [2, 3] Queue.dequeue(); // [3]
 */
Queue.prototype.dequeue = function () {
  if (this._container.length !== 0) {
    return this._container.shift();
  }
  return false;
}

/**
 * Returns the first element in a queue.
 * 
 * @returns Returns the first element if the queue is not empty, otherwise returns false.
 * @example [1, 2, 3] Queue.head(); // 1
 *          ['Cat', 'Dog', 'Pig'] Queue.head(); // 'Cat'
 */
Queue.prototype.head = function () {
  if (this._container.length !== 0) {
    return this._container[0];
  }
  return false;
}

/**
 * Returns the last element in a queue.
 * 
 * @returns Returns the last element if the queue is not empty, otherwise returns false.
 * @example [1, 2, 3] Queue.tail(); // 3
 *          ['Cat', 'Dog', 'Pig'] Queue.tail(); // 'Pig'
 */
Queue.prototype.tail = function () {
  if (this._container.length !== 0) {
    return this._container[this._container.length - 1];
  }
  return false;  
}

/**
 * Returns true if queue is empty.
 * 
 * @returns Returns true if queue is empty, otherwise returns false.
 * @example [] Queue.empty(); // true
 *          [1, 2] Queue.empty(); // false
 */
Queue.prototype.empty = function () {
  if (this._container.length === 0) {
    return true;
  }
  return false;
}

module.exports = Queue;