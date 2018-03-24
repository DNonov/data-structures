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
function Stack() {
  let _container = [];
  let _top       = 0;


  /**
   * Adds element in a stack.
   * 
   * @param {any} element Element that will be added.
   * @returns False if the given element is undefined.
   * @example [] Stack.push('Cat'); // ['Cat']
   * ['Cat'] Stack.push('Dog'); // ['Cat', 'Dog']         
   */     
  this.push = function (element) {
    if (element === undefined) {
      return false;
    }
    _container[_top++] = element;
  }

  /**
   * Removes and returns the topmost element.
   * 
   * @returns Returns the removed element if the stack is not empty. Otherwise returns false.
   * @example ['Cat', 'Dog', 'Deer'] Stack.pop(); // 'Deer'
   * ['Cat', 'Dog'] Stack.pop(); // 'Dog'
   */
  this.pop = function () {
    if (_top !== 0) {
      return _container[--_top];
    }
    return false;
  }

  /**
   * Returns the topmost element of a stack.
   * 
   * @returns Returns the topmost element if the stack is not empty. Otherwise returns falsse.
   * @example ['Cat', 'Dog'] Stack.peek(); // 'Dog'
   * ['Pig','Cat'] Stack.peek(); // 'Cat'
   */
  this.peek = function () {
    if (_top !== 0) {
      return _container[_top - 1];
    }
    return false;
  }

  /**
   * Deletes all elements in a stack.
   * @example ['Cat', 'Dog'] Stack.clear(); // []
   */
  this.clear = function () {
    _top = 0;
  }

  /**
   * Returns the length of a stack.
   * 
   * @returns Returns the length of a stack.
   * @example [] Stack.length(); // 0
   * ['Cat'] Stack.length(); // 1
   */
  this.length = function () {
    return _top;
  }

  /**
   * Returns array representation of a stack.
   * 
   * @returns Array representation of a stack.
   */
  this.toArray = function () {
    return _container;
  }

}
module.exports = Stack;