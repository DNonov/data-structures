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

const chalk = require('chalk');
const error = chalk.bgRed;

/**
 * List function constructor.
 * 
 * @example let myList = new List();
 * @description In computer science, a list or sequence is an abstract data type that represents a 
 * countable number of ordered values, where the same value may occur more than once. An instance of 
 * a list is a computer representation of the mathematical concept of a finite sequence; 
 * the (potentially) infinite analog of a list is a stream. Lists are a basic example of containers, 
 * as they contain other values. If the same value occurs multiple times, each occurrence is considered a distinct item.
 * Full wikipedia article at: https://en.wikipedia.org/wiki/List_(abstract_data_type)
 * 
 */
function List() {

  // Private stuff
  let _container       = [];
  let _listSize        = 0;
  let _position        = 0;


  // Public methods

  /**
   * Appends element to the list.
   * 
   * @param {any} element Element that will be append.
   * @returns Returns the object for method chaining.
   * @example [1, 3] List.append(2).append(4); // [1, 3, 2, 4]
   */
  this.append = function (element){
    _container[_listSize++] = element;
    return this;
  }

  /**
   * Finds element in the list.
   * 
   * @param {any} element Element that will be found or not.
   * @returns Returns element's _position or -1 if it not present.
   * @example ['cat', 'dog'] List.find('cat') // 0
   *                          List.find('dog') // 1
   *                          List.find('cow') // -1
   */
  this.find = function (element) {
    return _container.indexOf(element);
  }

  /**
   * Removes element from the list.
   * 
   * @param {any} element Element that will be removed.
   * @returns Returns true or false if the element it is not present.
   * @example ['cat', 'dog'] List.find('cat') // 0
   */
  this.remove = function (element) {
    const elementPosition = this.find(element);
    if (elementPosition > -1) {
      _container.splice(elementPosition, 1);
      --_listSize;
      return true;
    }
    console.error(error(`List.remove(): Cannot find ${element}!`));
    return false;
  }

  /**
   * Returns the length of the list.
   * 
   * @returns Rreturns the length of the list.
   */
  this.length = function () {
    return _listSize;
  }

  /**
   * Displays the list.
   * 
   * @returns Returns array of the list elements.
   */
  this.display = function () {
    return _container;
  }

  /**
   * Inserts element in the list.
   * 
   * @param {any} element Element to insret in the list. 
   * @param {any} insert_position Element after witch the insertion element will be inserted.
   * @returns Returns true or false if the element it is not present. 
   */
  this.insert = function (element, insertPosition) {
    const elementPosition = this.find(insertPosition);
    if (elementPosition > -1) {
      _container.splice(elementPosition + 1, 0, element);
      ++_listSize;
      return true;
    }
    console.error(error('List.insert(): Wrong or less arguments!'));
    return false;
  }

  /**
   * Deletes all elements in the list.
   * 
   */
  this.clear = function () {
    delete _container;
    _container = [];
    _listSize = _position = 0;
  }

  /**
   * Detrming if given element is in the list.
   * 
   * @param {any} element
   * @returns Returns true or false if the element it is not present.
   * 
   */
  this.contains = function (element) {
    for (let i = 0; i < _container.length; i++) {
      if (_container[i] === element) {
        return true;
      }
    }
    console.error(error(`List.contains(): Cannot find ${element}!`));
    return false;
  }

  /**
   * Goes to the first element in the list.
   * 
   */
  this.head = function () {
    _position = 0;
  }

  /**
   * Goes to the last element of the list.
   * 
   */
  this.tail = function () {
    _position = _listSize - 1;
  }

  /**
   * Goes to the previus element in the list.
   * 
   */
  this.previus = function () {
    if (_position > 0) {
      --_position;
    }
  }

  /**
   * Goes to the next element in the list.
   * 
   */
  this.next = function () {
    if (_position < _listSize - 1) {
      ++_position;
    }
  }

  /**
   * Returns current position in the list.
   * 
   * @returns Returns current position.
   */
  this.currentPosition = function () {
    return _position;
  }

  /**
   * Moves to the passed position.
   * 
   * @param {any} position position that you want to move on.
   */
  this.moveTo = function (position) {
    if (position < _listSize) {
      _position = position;
    }
    console.error(error('List.moveTo(): Out of range argument!'));
    return false;
  }

  /**
   * Returns the current element
   * 
   * @returns Returns current element.
   */
  this.getElement = function () {
    if (_container[0] !== undefined ) {
      return _container[_position];
    }
    console.error(error('List.getElement(): Empty List!'));
    return false;
  }
}
module.exports = List;