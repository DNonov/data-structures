const MaxHeap = require('../src/maxHeap');
const jasmine = require('jasmine');

describe('MaxHeap', () => {
  let maxHeap;

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  it('creates a new max heap', () => {
    expect(maxHeap).toBeDefined();
  });

  it('returns true if a heap is empty', () => {
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it('returns false if a heap is not empty', () => {
    maxHeap.insert(1);
    expect(maxHeap.isEmpty()).toBe(false);
  });

  it('returns false if peek is called on an empty heap', () => {
    expect(maxHeap.peek()).toBe(false);
  });

  it('returns the peek element', () => {
    maxHeap.insert(1);
    expect(maxHeap.peek()).toBe(1);
  });

  it('returns false if there is no arguments passed to insert', () => {
    expect(maxHeap.insert()).toBe(false);
  });

  it('inserts a number into a heap', () => {
    maxHeap.insert(1);
    expect(maxHeap.isEmpty()).toBe(false);
  });

  it('inserts a string into a heap', () => {
    maxHeap.insert('cat');
    expect(maxHeap.peek()).toBe('cat');
  });

  it('inserts a string with priority into a heap', () => {
    maxHeap.insert('cat', 1);
    expect(maxHeap.peek()).toBe('cat');
  });

  it('inserts an ascending sequence of numbers without priority', () => {
    maxHeap.insert(1);
    maxHeap.insert(2);
    expect(maxHeap.peek()).toBe(2);
  });

  it('inserts a descending sequence of numbers without priority', () => {
    maxHeap.insert(2);
    maxHeap.insert(1);
    expect(maxHeap.peek()).toBe(2);
  });

  it('inserts a descending sequence of numbers with ascending priority', () => {
    maxHeap.insert(2, 1);
    maxHeap.insert(1, 2);
    expect(maxHeap.peek()).toBe(1);
  });

  it('inserts an ascending sequence of numbers with descending priority', () => {
    maxHeap.insert(1, 2);
    maxHeap.insert(2, 1);
    expect(maxHeap.peek()).toBe(1);
  });

  it('defaults priority to 0', () => {
    maxHeap.insert('cat');
    expect(maxHeap._container[1].priority).toBe(0);
  });

  it('removes an element form a heap', () => {
    maxHeap.insert(1);
    maxHeap.remove();
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it('removes an element with least priority', () => {
    maxHeap.insert('Cat',1);
    maxHeap.insert('Dog', 2);
    expect(maxHeap.remove()).toBe('Dog');
  });

  it('removes an element with least priority and is number', () => {
    maxHeap.insert(1);
    maxHeap.insert(2);
    expect(maxHeap.remove()).toBe(2);
  });

  it('removes two numbers in a row', () => {
    maxHeap.insert(1);
    maxHeap.insert(3);
    maxHeap.insert(2);
    expect(maxHeap.remove()).toBe(3);
  });

  it('removes two strings in a row', () => {
    maxHeap.insert('Cat', 1);
    maxHeap.insert('Dog', 3);
    maxHeap.insert('Hen', 2);
    expect(maxHeap.remove()).toBe('Dog');
  });

  it('returns false if a heap is empty while remove element', () => {
    expect(maxHeap.remove()).toBe(false);
  });

  it('returns the removed element', () => {
    maxHeap.insert(1);
    expect(maxHeap.remove()).toBe(1);
  });

  it('returns array representation of a heap', () => {
    maxHeap.insert(1);
    maxHeap.insert(2);
    expect(maxHeap.toArray()).toEqual([2, 1]);
  });
});