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

const BST        = require('../src/binarySearchTree');
const jasmine    = require('jasmine');

describe('BST method', () => {
  it('insearts new node', () => {
    let myBST = new BST();
    myBST.insert(1);
    expect(myBST.inOrder()).toEqual([1]);
    myBST.insert(2);
    expect(myBST.inOrder()).toEqual([1, 2]);
    myBST.insert('cat');
    expect(myBST.inOrder()).toEqual([1, 2, 'cat']);
  });
  it('finds the smallest value', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    expect(myBST.min()).toEqual(2);
  });
  it('finds the biggest value', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);  
    expect(myBST.max()).toEqual(47);
  });
  it('finds given value', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);  
    expect(myBST.find(2)).toEqual(2);
    expect(myBST.find(23)).toEqual(23);
  });
  it('removes given node', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    myBST.remove(2);  
    expect(myBST.inOrder()).toEqual([4, 17, 23, 47]);
    myBST.remove(23);
    expect(myBST.inOrder()).toEqual([4, 17, 47]);
  });
});