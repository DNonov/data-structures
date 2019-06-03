const MaxHeap = require('../src/minHeap');

describe('MaxHeap method', () => {
  let myMaxHeap;
  beforeEach(() => {
    myMaxHeap = new MaxHeap();
  });

  it('insert element in a heap', () => {
    expect(myMaxHeap.insert()).toEqual(false);
    myMaxHeap.insert('Rat');
    myMaxHeap.insert('Cat', 1);
    expect(myMaxHeap.insert(null)).toBe(false);
    expect(myMaxHeap.peek()).toBe('Rat');
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.peek()).toBe('Rat');
  });

  it('removes and returns element in a heap', () => {
    expect(myMaxHeap.remove()).toBe(false);
    myMaxHeap.insert('Rat');
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.remove()).toBe('Rat');
    expect(myMaxHeap.peek()).toBe('Cat');
  });

  it('returns true if a heap is empty', () => {
    expect(myMaxHeap.isEmpty()).toBe(true);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.isEmpty()).toBe(false);
  });

  it('returns array representation of a heap', () => {
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.toArray()).toEqual(['Cat', 'Dog', 'Bat']);
  });
});