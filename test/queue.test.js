const Queue = require('../src/queue');

describe('Queue method', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  it('adds element in a queue', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.toArray()).toEqual([1, 2, 3]);
  });

  it('removes and returns element in a queue', () => {
    expect(testQueue.dequeue()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.dequeue()).toBe(3);
    expect(testQueue.isEmpty()).toBe(true);
  });

  it('returns the first element in a queue', () => {
    expect(testQueue.head()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.head()).toBe(1);
  });

  it('returns the last element in a queue', () => {
    expect(testQueue.tail()).toBe(false);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.tail()).toBe(3);
  });

  it('returns true if queue is empty', () => {
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.enqueue(1);
    expect(testQueue.isEmpty()).toBe(false);
    testQueue.dequeue();
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.isEmpty()).toBe(false);
  });
});