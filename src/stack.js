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
 */
function Stack() {
  this._container = [];
  this._top       = 0;
  this.push       = push;
  this.pop        = pop;
  this.peek       = peek;
  this.clear      = clear;
  this.length     = length;
}

/**
 * Adds element in a stack.
 * 
 * @param {any} element Element that will be added.
 * @example [] Stack.push('Cat'); // ['Cat']
 *          ['Cat'] Stack.push('Dog'); // ['Cat', 'Dog']         
 */     
function push(element) {
  this._container[this._top++] = element;
}

/**
 * Removes and returns the topmost element.
 * 
 * @returns Returns the removed element if the stack is not empty. Otherwise returns false.
 * @example ['Cat', 'Dog', 'Deer'] Stack.pop(); // 'Deer'
 *          ['Cat', 'Dog'] Stack.pop(); // 'Dog'
 */
function pop() {
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
function peek() {
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
function clear() {
  this._top = 0;
}

/**
 * Returns the length of a stack.
 * 
 * @returns Returns the length of a stack.
 * @example [] Stack.length(); // 0
 *          ['Cat'] Stack.length(); // 1
 */
function length() {
  return this._top;
}

module.exports = Stack;