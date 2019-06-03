const MinHeap = require('../src/minHeap');

describe('MinHeap method', () => {
  let myMinHeap;

  beforeEach(() => {
    myMinHeap = new MinHeap();
  });

  it('insert element in a heap', () => {
    expect(myMinHeap.insert()).toEqual(false);
    myMinHeap.insert('Rat');
    myMinHeap.insert('Cat', 1);
    expect(myMinHeap.insert(null)).toBe(false);
    expect(myMinHeap.peek()).toBe('Rat');
    myMinHeap.insert('Dog', 21);
    myMinHeap.insert('Bat', 2);
    expect(myMinHeap.peek()).toBe('Rat');
  });

  it('removes and returns element in a heap', () => {
    expect(myMinHeap.remove()).toBe(false);
    myMinHeap.insert('Rat');
    myMinHeap.insert('Cat', 1);
    myMinHeap.insert('Dog', 21);
    myMinHeap.insert('Bat', 2);
    expect(myMinHeap.remove()).toBe('Rat');
    expect(myMinHeap.peek()).toBe('Cat');
  });

  it('returns true if a heap is empty', () => {
    expect(myMinHeap.isEmpty()).toBe(true);
    myMinHeap.insert('Bat', 2);
    expect(myMinHeap.isEmpty()).toBe(false);
  });

  it('returns array representation of a heap', () => {
    myMinHeap.insert('Cat', 1);
    myMinHeap.insert('Dog', 21);
    myMinHeap.insert('Bat', 2);
    expect(myMinHeap.toArray()).toEqual(['Cat', 'Dog', 'Bat']);
  });
});