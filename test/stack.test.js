const Stack = require('../src/stack');

describe('Stack method', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('pushes element to a stack', () => {
    stack.push('Jill');
    stack.push('Bill');
    stack.push(0);
    stack.push(undefined);
    stack.push(22);
    stack.push(-12);

    expect(stack.push(undefined)).toBe(false);
    expect(stack.toArray()).toEqual(['Jill', 'Bill', 0, 22, -12]);
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
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push('Jill');
    expect(stack.peek()).toBe('Jill');
    stack.push(undefined);
    expect(stack.peek()).toBe('Jill');
    stack.push(null);
    expect(stack.peek()).toBe(null);
    stack.push(-34);
    expect(stack.peek()).toBe(-34);
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

  it('returns the length of a stack', () => {
    expect(stack.length()).toBe(0);
    stack.push(1);
    expect(stack.length()).toBe(1);
    stack.push(2);
    expect(stack.length()).toBe(2);
    stack.push(3);
    expect(stack.length()).toBe(3);
    stack.push(4);
    expect(stack.length()).toBe(4);
  });
});
