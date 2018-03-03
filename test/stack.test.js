const Stack = require('../src/stack');
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

    expect(testStack.push(undefined)).toBe(false);
    expect(testStack.toArray()).toEqual(['Jill', 'Bill', 0, 22, -12]);
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
    expect(testStack.peek()).toBe('Jill');
    testStack.push(null);
    expect(testStack.peek()).toBe(null);
    testStack.push(-34);
    expect(testStack.peek()).toBe(-34);
  });
  
  it('deletes all elements in a stack', () => {
    let testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.push(4);
    expect(testStack.peek()).toBe(4);
    testStack.clear();
    expect(testStack.peek()).toBe(false);
  });
  
  it('returns the length of a stack', () => {
    let testStack = new Stack();
    expect(testStack.length()).toBe(0);
    testStack.push(1);
    expect(testStack.length()).toBe(1);
    testStack.push(2);
    expect(testStack.length()).toBe(2);
    testStack.push(3);
    expect(testStack.length()).toBe(3);
    testStack.push(4);
    expect(testStack.length()).toBe(4);
  });
});
