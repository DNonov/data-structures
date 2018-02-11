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
 * Function constructor of a stack.
 * 
 * @example Let myStack = new Stack();
 * @description In computer science, a stack is an abstract data type that serves as a 
 * collection of elements, with two principal operations:
 * push, which adds an element to the collection, and
 * pop, which removes the most recently added element that was not yet removed.
 * The order in which elements come off a stack gives rise to its alternative name, 
 * LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.
 * Full wikipedia article at: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 * 
 */
function Stack() {
  this._container = [];
  this._top       = 0;
}

/**
 * Adds element in a stack.
 * 
 * @param {any} element Element that will be added.
 * @example [] Stack.push('Cat'); // ['Cat']
 *          ['Cat'] Stack.push('Dog'); // ['Cat', 'Dog']         
 */     
Stack.prototype.push = function (element) {
  this._container[this._top++] = element;
}

/**
 * Removes and returns the topmost element.
 * 
 * @returns Returns the removed element if the stack is not empty. Otherwise returns false.
 * @example ['Cat', 'Dog', 'Deer'] Stack.pop(); // 'Deer'
 *          ['Cat', 'Dog'] Stack.pop(); // 'Dog'
 */
Stack.prototype.pop = function () {
  if (this._top !== 0) {
    return this._container[--this._top];
  }
  console.error('Stack.pop(): Empty Stack!');
  return false;
}

/**
 * Returns the topmost element of a stack.
 * 
 * @returns Returns the topmost element if the stack is not empty. Otherwise returns falsse.
 * @example ['Cat', 'Dog'] Stack.peek(); // 'Dog'
 *          ['Pig','Cat'] Stack.peek(); // 'Cat'
 */
Stack.prototype.peek = function () {
  if (this._top !== 0) {
    return this._container[this._top - 1];
  }
  console.error('Stack.peek(): Empty Stack!');
  return false;
}

/**
 * Deletes all elements in a stack.
 * @example ['Cat', 'Dog'] Stack.clear(); // []
 */
Stack.prototype.clear = function () {
  this._top = 0;
}

/**
 * Returns the length of a stack.
 * 
 * @returns Returns the length of a stack.
 * @example [] Stack.length(); // 0
 *          ['Cat'] Stack.length(); // 1
 */
Stack.prototype.length = function () {
  return this._top;
}

module.exports = Stack;