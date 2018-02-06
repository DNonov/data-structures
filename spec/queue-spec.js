const Queue = require('../src/queue');
const jasmine = require('jasmine');

describe('Queue method', () => {
  it('adds element in a queue', () => {
    let testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue._container[0]).toBe(1);
    expect(testQueue._container[1]).toBe(2);
    expect(testQueue._container[2]).toBe(3);
  });
  
  it('removes and returns element in a queue', () => {
    let testQueue = new Queue();
    expect(testQueue.dequeue()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.dequeue()).toBe(3);
    expect(testQueue._container.length).toBe(0);
  });
  
  it('returns the first element in a queue', () => {
    let testQueue = new Queue();
    expect(testQueue.head()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.head()).toBe(1);
  });
  
  it('returns the last element in a queue', () => {
    let testQueue = new Queue();
    expect(testQueue.tail()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.tail()).toBe(3);
  });

  it('returns true if queue is empty', () => {
    let testQueue = new Queue();
    expect(testQueue.empty()).toBe(true);
    testQueue.enqueue(1);
    expect(testQueue.empty()).toBe(false);
    testQueue.dequeue();
    expect(testQueue.empty()).toBe(true);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.empty()).toBe(false);
  });
});