const Heap = require('../src/heap');

describe('Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  it('defaults priority to "max" if it is omitted', () => {
    heap = new Heap();
    expect(heap._priority).toEqual('max');
  });

  it('returns true if a heap is empty', () => {
    expect(heap.isEmpty()).toBe(true);
  });

  it('returns false if a heap is not empty', () => {
    heap.insert(1);
    expect(heap.isEmpty()).toBe(false);
  });

  it('throws an error if peek is called on an empty heap', () => {
    expect(() => heap.peek()).toThrow(new Error('Heap is empty.'));
  });

  describe('MaxHeap', () => {
    let maxHeap;

    beforeEach(() => {
      maxHeap = new Heap();
    });

    it('creates a new max heap', () => {
      maxHeap = new Heap('max');
      expect(maxHeap._priority).toEqual('max');
    });

    it('returns the peek element', () => {
      maxHeap.insert(1);
      maxHeap.insert(2);
      expect(maxHeap.peek()).toBe(2);
    });

    it('returns the peek element with more than 3 inserted elements', () => {
      maxHeap.insert(1);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(4);
      expect(maxHeap.peek()).toBe(4);
    });

    it('throws an error if there is no arguments passed to insert', () => {
      expect(() => maxHeap.insert()).toThrow(new Error('Missing argument.'));
    });

    it('inserts a number into a maxHeap', () => {
      maxHeap.insert(1);
      expect(maxHeap.isEmpty()).toBe(false);
    });

    it('inserts a string into a maxHeap', () => {
      maxHeap.insert('cat');
      expect(maxHeap.peek()).toBe('cat');
    });

    it('inserts a string with priority into a maxHeap', () => {
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

    it('removes an element form a maxHeap', () => {
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

    it('throws an error if a maxHeap is empty while remove element', () => {
      expect(() => maxHeap.remove()).toThrow(new Error('Heap is empty.'));
    });

    it('returns the removed element', () => {
      maxHeap.insert(1);
      expect(maxHeap.remove()).toBe(1);
    });

    it('returns array representation of a maxHeap', () => {
      maxHeap.insert(1);
      maxHeap.insert(2);
      expect(maxHeap.toArray()).toEqual([2, 1]);
    });

    it('throws an error if toArray is called on empty maxHeap', () => {
      expect(() => maxHeap.toArray()).toThrow(new Error('Heap is empty.'));
    });

  });

  describe('MinHeap', () => {
    let minHeap;

    beforeEach(() => {
      minHeap = new Heap('min');
    });

    it('creates a new min heap', () => {
      minHeap = new Heap('min');
      expect(minHeap._priority).toEqual('min');
    });

    it('inserts a number into a min heap', () => {
      minHeap.insert(1);
      expect(minHeap.isEmpty()).toBe(false);
    });

    it('inserts a string into a minHeap', () => {
      minHeap.insert('cat');
      expect(minHeap.isEmpty()).toBe(false);
    });

    it('returns the peek element at min heap', () => {
      minHeap.insert(1);
      minHeap.insert(2);
      expect(minHeap.peek()).toBe(1);
    });

    it('returns the peek element with more than 3 inserted elements min heap', () => {
      minHeap.insert(1);
      minHeap.insert(2);
      minHeap.insert(3);
      minHeap.insert(4);
      expect(minHeap.peek()).toBe(1);
    });

    it('throws an error if there is no arguments passed to insert min heap', () => {
      expect(() => minHeap.insert()).toThrow(new Error('Missing argument.'));
    });

    it('inserts a string with priority into a minHeap', () => {
      minHeap.insert('cat', 1);
      expect(minHeap.peek()).toBe('cat');
    });

    it('inserts an ascending sequence of numbers without priority min heap', () => {
      minHeap.insert(1);
      minHeap.insert(2);
      expect(minHeap.peek()).toBe(1);
    });

    it('inserts a descending sequence of numbers without priority min heap', () => {
      minHeap.insert(2);
      minHeap.insert(1);
      expect(minHeap.peek()).toBe(1);
    });

    it('inserts a descending sequence of numbers with ascending priority min heap', () => {
      minHeap.insert(2, 1);
      minHeap.insert(1, 2);
      expect(minHeap.peek()).toBe(2);
    });

    it('inserts an ascending sequence of numbers with descending priority min heap', () => {
      minHeap.insert(1, 2);
      minHeap.insert(2, 1);
      expect(minHeap.peek()).toBe(2);
    });

    it('defaults priority to 0 min heap', () => {
      minHeap.insert('cat');
      expect(minHeap._container[1].priority).toBe(0);
    });

    it('removes an element form a minHeap', () => {
      minHeap.insert(1);
      minHeap.remove();
      expect(minHeap.isEmpty()).toBe(true);
    });

    it('removes an element with least priority min heap', () => {
      minHeap.insert('Cat',1);
      minHeap.insert('Dog', 2);
      expect(minHeap.remove()).toBe('Cat');
    });

    it('removes an element with least priority and is number min heap', () => {
      minHeap.insert(1);
      minHeap.insert(2);
      expect(minHeap.remove()).toBe(1);
    });

    it('removes two numbers in a row min heap', () => {
      minHeap.insert(1);
      minHeap.insert(3);
      minHeap.insert(2);
      expect(minHeap.remove()).toBe(1);
    });

    it('removes two strings in a row min heap', () => {
      minHeap.insert('Cat', 1);
      minHeap.insert('Dog', 3);
      minHeap.insert('Hen', 2);
      expect(minHeap.remove()).toBe('Cat');
    });

    it('throws an error if a minHeap is empty while remove element', () => {
      expect(() => minHeap.remove()).toThrow(new Error('Heap is empty.'));
    });

    it('returns the removed element from a min heap', () => {
      minHeap.insert(1);
      expect(minHeap.remove()).toBe(1);
    });

    it('returns array representation of a min heap', () => {
      minHeap.insert(1);
      minHeap.insert(2);
      expect(minHeap.toArray()).toEqual([1, 2]);
    });

    it('throws an error if toArray is called on empty minHeap', () => {
      expect(() => minHeap.toArray()).toThrow(new Error('Heap is empty.'));
    });
  });
});