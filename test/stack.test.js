const Stack = require('../src/stack');

describe('Stack method', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('throws an error if push is called without argument', () => {
    expect(() => stack.push()).toThrow(new Error('undefined or missing argument'));
  });

  it('returns 0 on empty stack while length is called', () => {
    expect(stack.length()).toEqual(0);
  });

  it('returns the length of a stack', () => {
    stack.push(1);
    expect(stack.length()).toEqual(1);
  });

  it('pushes element into a stack', () => {
    stack.push(1);
    expect(stack.length()).toEqual(1);
  });

  it('throws error if pop is called on empty stack', () => {
    expect(() => stack.pop()).toThrow(new Error('The stack is empty.'));
  });

  it('removes the top element in a stack', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it('throws an error if peek is called on empty stack', () => {
    expect(() => stack.peek()).toThrow(new Error('The stack is empty.'));
  });

  it('deletes all elements in a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.clear();
  });
});
