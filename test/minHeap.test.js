const MinHeap = require('../src/minHeap');
const jasmine = require('jasmine');

describe('MinHeap method', () => {
  it('insert element in a heap', () => {
    let myMinHeap = new MinHeap();
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
    let myMaxHeap = new MinHeap();
    expect(myMaxHeap.remove()).toBe(false);
    myMaxHeap.insert('Rat');
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.remove()).toBe('Rat');
    expect(myMaxHeap.peek()).toBe('Cat');
  });
  
  it('returns true if a heap is empty', () => {
    let myMaxHeap = new MinHeap();
    expect(myMaxHeap.isEmpty()).toBe(true);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.isEmpty()).toBe(false);
  });
  
  it('returns array representation of a heap', () => {
    let myMaxHeap = new MinHeap();
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.toArray()).toEqual(['Cat', 'Dog', 'Bat']);
  });
});