const PriorityQueueMin = require('../src/priorityQueueMin');

describe('PriorityQueueMin method', () => {
  let myPriorityQueue;

  beforeEach(() => {
    myPriorityQueue = new PriorityQueueMin();
  });

  it('insert element in a PriorityQueue', () => {
    expect(myPriorityQueue.enqueue()).toEqual(false);
    myPriorityQueue.enqueue('Rat', 34);
    myPriorityQueue.enqueue('Rat', 'fish');
    myPriorityQueue.enqueue('Cat', 1);
    expect(myPriorityQueue.enqueue(null)).toBe(false);
    expect(myPriorityQueue.head()).toBe('Rat');
    myPriorityQueue.enqueue('Dog', 21);
    myPriorityQueue.enqueue('Bat', 2);
    expect(myPriorityQueue.head()).toBe('Rat');
  });

  it('removes and returns element in a PriorityQueue', () => {
    myPriorityQueue.enqueue('Rat');
    myPriorityQueue.enqueue('Cat', 1);
    myPriorityQueue.enqueue('Dog', 21);
    myPriorityQueue.enqueue('Bat', 2);
    myPriorityQueue.dequeue();
    expect(myPriorityQueue.head()).toBe('Cat');
    myPriorityQueue.enqueue('Pig', 0);
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
    expect(myPriorityQueue.head()).toEqual('Cat');
    expect(myPriorityQueue.toArray()).toEqual(['Cat', 'Dog', 'Bat']);
    expect(myPriorityQueue.head()).toEqual('Cat');
  });
});