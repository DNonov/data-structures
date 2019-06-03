const PriorityQueue = require('../src/priorityQueueMax');

describe('PriorityQueueMax method', () => {
  let myPriorityQueue;

  beforeEach(() => {
    myPriorityQueue = new PriorityQueue();
  });

  it('insert element in a PriorityQueue', () => {
    expect(myPriorityQueue.enqueue()).toEqual(false);
    myPriorityQueue.enqueue('Rat');
    expect(myPriorityQueue.enqueue('Rat', 'fish')).toEqual(undefined);
    myPriorityQueue.enqueue('Cat', 1);
    expect(myPriorityQueue.enqueue(null)).toBe(false);
    expect(myPriorityQueue.head()).toBe('Cat');
    myPriorityQueue.enqueue('Dog', 21);
    myPriorityQueue.enqueue('Bat', 2);
    expect(myPriorityQueue.head()).toBe('Dog');
  });

  it('removes and returns element in a PriorityQueue', () => {
    myPriorityQueue.enqueue('Rat');
    myPriorityQueue.enqueue('Cat', 1);
    myPriorityQueue.enqueue('Dog', 21);
    myPriorityQueue.enqueue('Bat', 2);
    myPriorityQueue.dequeue();
    expect(myPriorityQueue.head()).toBe('Bat');
    myPriorityQueue.enqueue('Pig', 31);
    expect(myPriorityQueue.head()).toBe('Pig');
  });

  it('returns true if a PriorityQueue is empty', () => {
    expect(myPriorityQueue.isEmpty()).toBe(true);
    myPriorityQueue.enqueue('Bat', 2);
    expect(myPriorityQueue.isEmpty()).toBe(false);
  });

  it('returns array representation of a PriorityQueue', () => {
    expect(myPriorityQueue.toArray()).toEqual([]);
    expect(myPriorityQueue.head()).toEqual(false);
    myPriorityQueue.enqueue('Cat', 1);
    myPriorityQueue.enqueue('Dog', 21);
    myPriorityQueue.enqueue('Bat', 2);
    expect(myPriorityQueue.head()).toEqual('Dog');
    expect(myPriorityQueue.toArray()).toEqual(['Dog', 'Cat', 'Bat']);
    expect(myPriorityQueue.head()).toEqual('Dog');
  });
});