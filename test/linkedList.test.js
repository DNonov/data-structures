const LinkedList = require('../src/linkedList');
const jasmine = require('jasmine');

describe('LinkedList method', () => {
  it('insert new node', () => {
    let testList = new LinkedList();
    expect(testList.insert(1, 2)).toBe(false);
    testList.insert(1);
    expect(testList.toArray()[0]).toBe(1);
    testList.insert(2, 1);
    expect(testList.toArray()[1]).toBe(2);
    testList.insert(3, 2);
    expect(testList.toArray()[2]).toBe(3);
    expect(testList.insert(1, 78)).toBe(false); 
  });
  
  it('find node', () => {
    let Node = {};
    let testList = new LinkedList();
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    expect(testList.GetElement('pig')).toBeUndefined(); 
    expect(testList.GetElement(23)).toBeUndefined(); 
    expect(testList.GetElement(3)).toBe(3);
    expect(testList.GetElement(2)).toBe(2);
    expect(testList.GetElement(1)).toBe(1);
  });
  
  it('returns the LinkedList in form of array', () => {
    let testList = new LinkedList();
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    expect(testList.toArray()).toEqual([1, 2, 3]);
  });
  
  it('removes node form the LinkedList', () => {
    let testList = new LinkedList();
    expect(testList.remove(1)).toBe(false);
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    testList.remove(1);
    expect(testList.toArray()).toEqual([2, 3]);
  });
});