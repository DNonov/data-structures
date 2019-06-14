/**
 * Function constructor of a stack.
 *
 * @example const Stack = require('dstructures').Stack;
 * const myStack = new Stack();
 * @description In computer science, a stack is an abstract data type that serves as a
 * collection of elements, with two principal operations:
 * push, which adds an element to the collection, and
 * pop, which removes the most recently added element that was not yet removed.
 * The order in which elements come off a stack gives rise to its alternative name,
 * LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.
 * Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Stack_(abstract_data_type)}
 * @public
 * @constructor
 */
class Stack {
  constructor() {
    this._container = [];
    this.top = 0;
  }

  /**
   * Adds element in a stack.
   *
   * @param {any} element Given element.
   * @returns {Boolean|Void} Returns false if the given element is undefined.
   * @example [] Stack.push('Cat'); // ['Cat']
   * ['Cat'] Stack.push('Dog'); // ['Cat', 'Dog']
   */
  push(element) {
    if (element === undefined) {
      throw new Error(`${element} or missing argument`);
    }
    this._container[this.top++] = element;
  }

  /**
   * Removes and returns the topmost element.
   *
   * @returns {Boolean|Any} Returns the removed element if the stack is not empty. Otherwise returns false.
   * @example ['Cat', 'Dog', 'Deer'] Stack.pop(); // 'Deer'
   * ['Cat', 'Dog'] Stack.pop(); // 'Dog'
   */
  pop() {
    if (this.top !== 0) {
      return this._container[--this.top];
    }
    return false;
  }

  /**
   * Returns the topmost element of a stack.
   *
   * @returns {Boolean|Void} Returns the topmost element if the stack is not empty. Otherwise returns falsse.
   * @example ['Cat', 'Dog'] Stack.peek(); // 'Dog'
   * ['Pig','Cat'] Stack.peek(); // 'Cat'
   */
  peek() {
    if (this.top !== 0) {
      return this._container[this.top - 1];
    }
    return false;
  }

  /**
   * Deletes all elements in a stack.
   * @example ['Cat', 'Dog'] Stack.clear(); // []
   */
  clear() {
    this.top = 0;
  }

  /**
   * Returns the length of a stack.
   *
   * @returns {Number} Returns the length of a stack.
   * @example [] Stack.length(); // 0
   * ['Cat'] Stack.length(); // 1
   */
  length() {
    return this.top;
  }

  /**
   * Returns array representation of a stack.
   *
   * @returns {Array} Returns array representation of a stack.
   */
  toArray() {
    return this._container;
  }
}
module.exports = Stack;