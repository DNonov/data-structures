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

const Dictionary = require('../src/dictionary');
const jasmine    = require('jasmine');

describe('Dictionary method', () => {
  it('adds key value pair', () => {
    let testDictionary = new Dictionary();
    testDictionary.add('moo', 'cat');
    testDictionary.add(2, 'dog');
    testDictionary.add(3, undefined);
    testDictionary.add(4, 'car');
    expect(testDictionary.find('moo')).toBe('cat');
    expect(testDictionary.find(2)).toBe('dog');
    expect(testDictionary.find(3)).toBe(undefined);
    expect(testDictionary.find(4)).toBe('car');
  });

  it('returns the value for the given key', () => {
    let testDictionary = new Dictionary();
    testDictionary.add('moo', 'cat');
    testDictionary.add(2, 'dog');
    testDictionary.add(3, undefined);
    testDictionary.add(4, 'car');
    expect(testDictionary.find('moo')).toBe('cat');
    expect(testDictionary.find(2)).toBe('dog');
    expect(testDictionary.find(3)).toBe(undefined);
    expect(testDictionary.find(4)).toBe('car');
    expect(testDictionary.find(23)).toBe(undefined);
  });

  it('removes the value associated to the given key', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 'cat');
    expect(testDictionary.display()).toContain('cat');
    testDictionary.remove(0);
    expect(testDictionary.find(0)).toBe(undefined);
  });
  
  it('counts all key value pairs', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 34);
    testDictionary.add('boo', 'cat');
    testDictionary.add(34, 'pig');
    expect(testDictionary.count()).toBe(3);
    testDictionary.remove(0);
    expect(testDictionary.count()).toBe(2);
    testDictionary.remove('boo');
    expect(testDictionary.count()).toBe(1);
    testDictionary.remove(34);
    expect(testDictionary.count()).toBe(0);
  });

  it('deletes all key value pairs', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 34);
    testDictionary.add('boo', 'cat');
    testDictionary.add(34, 'pig');
    expect(testDictionary.find(0)).toBe(34);
    expect(testDictionary.find('boo')).toBe('cat');
    expect(testDictionary.find(34)).toBe('pig');
    testDictionary.clear();
    expect(testDictionary.find(0)).toBe(undefined);
    expect(testDictionary.find('boo')).toBe(undefined);
    expect(testDictionary.find(34)).toBe(undefined);
  });
});