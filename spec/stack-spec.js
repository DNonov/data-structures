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
});
