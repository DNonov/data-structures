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

    expect(testStack.container[0]).toBe("Jill");
    expect(testStack.container[1]).toBe("Bill");
    expect(testStack.container[2]).toBe(0);
    expect(testStack.container[3]).toBe(undefined);
    expect(testStack.container[4]).toBe(22);
    expect(testStack.container[5]).toBe(-12);
  });
});
