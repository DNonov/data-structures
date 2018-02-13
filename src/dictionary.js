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

function Dictionary() {
  this._conatiner = [];


  this.add = function (key, value) {
    this._conatiner[key] = value;
  }

  this.find = function (key) {
    return this._conatiner[key];
  }

  this.remove = function (key) {
    delete this._conatiner[key];
  }

  this.display = function () {
    return this._conatiner;
  }

  this.count = function () {
    let number = 0;
    for (const key in Object.keys(this._conatiner)) {
      number++;
    }
    return number;
  }

  this.clear = function () {
    for (const key in Object.keys(this._conatiner)) {
      delete this._conatiner[key];
    }
  }
}
module.exports = Dictionary;