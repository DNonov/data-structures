const Stack = require('../src/stack');

describe('Stack method', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('throws error if push is called without argument', () => {
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

  it('removes the top element in a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(false);
  });

  it('returns the top element in a stack', () => {
  });

  it('deletes all elements in a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.peek()).toBe(4);
    stack.clear();
    expect(stack.peek()).toBe(false);
  });
});
