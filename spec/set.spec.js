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

const Set = require('../src/set');
const jasmine = require('jasmine');

describe('set method', () => {
  it('adds element in a set', () => {
    let testSet = new Set();
    expect(testSet.display()).toEqual([]);
    testSet.add(1);
    expect(testSet.add(1)).toBe(false);
    expect(testSet.display()).toEqual([1]);
    testSet.add('cat');
    expect(testSet.display()).toEqual([1, 'cat']);
  });

  it('removes element from a set ', () => {
    let testSet = new Set();
    expect(testSet.remove(1)).toBe(false);
    testSet.add(1);
    testSet.add('cat');
    testSet.remove('cat');
    expect(testSet.display()).toEqual([1]);
  });
  
  it('checks if element is a member of the set', () => {
    let testSet = new Set();
    expect(testSet.conatains(1)).toBe(false);
    testSet.add(1);
    expect(testSet.conatains(1)).toBe(true);
    expect(testSet.conatains(2)).toBe(false);
  });

  it('implements union on two sets', () => {
    let testSet1 = new Set();
    testSet1.add(1);
    let testSet2 = new Set();
    testSet2.add(2);
    let unitetSet1;
    expect(unitetSet1 = testSet1.union()).toBe(false);
    expect(unitetSet1 = testSet1.union(1)).toBe(false);
    expect(unitetSet1 = testSet1.union('cat')).toBe(false);
    expect(unitetSet1 = testSet1.union([])).toBe(false);
    expect(unitetSet1 = testSet1.union({})).toBe(false);
    let unitedSet = testSet1.union(testSet2);
    expect(unitedSet.display()).toContain(1);
    expect(unitedSet.display()).toContain(2);
  });

  it('implements intersection of sets', () => {
    let testSet1 = new Set();
    let intersectSet;
    expect(intersectSet = testSet1.intersect()).toBe(false);
    expect(intersectSet = testSet1.intersect('cat')).toBe(false);
    expect(intersectSet = testSet1.intersect(1)).toBe(false);
    expect(intersectSet = testSet1.intersect([])).toBe(false);
    expect(intersectSet = testSet1.intersect({})).toBe(false);
    testSet1.add(1); 
    testSet1.add(2); 
    testSet1.add(3); 
    let testSet2 = new Set();
    testSet2.add(2);
    testSet2.add(4);
    testSet2.add(5);
    let intersect = testSet1.intersect(testSet2);
    expect(intersect.display()).toEqual([2]);
    let testSet11 = new Set();
    testSet11.add(1); 
    testSet11.add(3); 
    testSet11.add(5); 
    let testSet21 = new Set();
    testSet21.add(2);
    testSet21.add(4);
    testSet21.add(6);
    let intersect1 = testSet11.intersect(testSet21);
    expect(intersect1.display()).toEqual([]);
    let testSet12 = new Set();
    testSet12.add(1); 
    testSet12.add(3); 
    testSet12.add(5); 
    let testSet22 = new Set();
    testSet22.add(1);
    testSet22.add(3);
    testSet22.add(5);
    let intersect2 = testSet12.intersect(testSet22);
    expect(intersect2.display()).toEqual([1, 3, 5]);
    let testSet13 = new Set(); 
    let testSet23 = new Set();
    let intersect3 = testSet13.intersect(testSet23);
    expect(intersect3.display()).toEqual([]);
  });

  it('cheks if the set is subset of a given set', () => {
    let testSet1 = new Set();
    let testSet2 = new Set();
    expect(testSet1.subset()).toBe(false);
    expect(testSet1.subset(1)).toBe(false);
    expect(testSet1.subset('cat')).toBe(false);
    expect(testSet1.subset([])).toBe(false);
    expect(testSet1.subset({})).toBe(false);
    expect(testSet1.subset(testSet2)).toBe(true);
    testSet1.add(1);
    testSet1.add(2);
    testSet1.add(3);
    testSet2.add(1);
    testSet2.add(2);
    testSet2.add(3);
    expect(testSet1.subset(testSet2)).toBe(true);
    testSet2.remove(2);
    expect(testSet1.subset(testSet2)).toBe(false);
    testSet2.add(2);
    testSet2.add(5);
    expect(testSet1.subset(testSet2)).toBe(true);
  });

  it('returns the difference of two sets', () => {
    let testSet1 = new Set();
    let testSet2 = new Set();
    expect(testSet1.difference()).toBe(false);
    expect(testSet1.difference(1)).toBe(false);
    expect(testSet1.difference('cat')).toBe(false);
    expect(testSet1.difference([])).toBe(false);
    expect(testSet1.difference({})).toBe(false);
    expect(testSet1.difference(testSet2).display()).toEqual([]);
    testSet1.add(1);
    testSet1.add(2);
    testSet1.add(3);
    testSet2.add(1);
    testSet2.add(3);
    expect(testSet1.difference(testSet2).display()).toEqual([2]);
    testSet1.add(4);
    expect(testSet1.difference(testSet2).display()).toEqual([2, 4]);
    testSet2.add(2);
    testSet2.add(4);
    testSet2.add(5);
    expect(testSet1.difference(testSet2).display()).toEqual([]);
  });
});
