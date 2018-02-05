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

const Stack = require('../source/stack');
const jasmine = require('jasmine');

describe('Stack method', () => {
  it('pushes element to a stack', () => {
    let testStack = new Stack();
    testStack.push('Jill');
    testStack.push('Bill');
    testStack.push(0);
    testStack.push(undefined);
    testStack.push(22);
    testStack.push(-12);

    expect(testStack._container[0]).toBe("Jill");
    expect(testStack._container[1]).toBe("Bill");
    expect(testStack._container[2]).toBe(0);
    expect(testStack._container[3]).toBe(undefined);
    expect(testStack._container[4]).toBe(22);
    expect(testStack._container[5]).toBe(-12);
  });

  it('removes the top element in a stack', () => {
    let testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.pop()).toBe(3);
    expect(testStack.pop()).toBe(2);
    expect(testStack.pop()).toBe(1);
    expect(testStack.pop()).toBe(false);
  });

  it('returns the top element in a stack', () => {
    let testStack = new Stack();
    expect(testStack.peek()).toBe(false);
    testStack.push(1);
    expect(testStack.peek()).toBe(1);
    testStack.push('Jill');
    expect(testStack.peek()).toBe('Jill');
    testStack.push(undefined);
    expect(testStack.peek()).toBe(undefined);
    testStack.push(null);
    expect(testStack.peek()).toBe(null);
    testStack.push(-34);
    expect(testStack.peek()).toBe(-34);
  });
});
