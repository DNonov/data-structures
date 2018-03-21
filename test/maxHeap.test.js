const MaxHeap = require('../src/maxHeap');
const jasmine = require('jasmine');

describe('MaxHeap', () => {
  it('insert element in a heap', () => {
    let myMaxHeap = new MaxHeap();
    expect(myMaxHeap.peek()).toBe(false);
    expect(myMaxHeap.insert()).toEqual(false);
    myMaxHeap.insert('Rat');
    myMaxHeap.insert('Cat', 1);
    expect(myMaxHeap.insert(null)).toBe(false);
    expect(myMaxHeap.peek()).toBe('Cat');
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.peek()).toBe('Dog');
  });
  
  it('removes and returns element in a heap', () => {
    let myMaxHeap = new MaxHeap();
    expect(myMaxHeap.remove()).toBe(false);
    myMaxHeap.insert('Rat');
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.remove()).toBe('Dog');
    expect(myMaxHeap.peek()).toBe('Bat');
  });
  
  it('returns true if a heap is empty', () => {
    let myMaxHeap = new MaxHeap();
    expect(myMaxHeap.isEmpty()).toBe(true);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.isEmpty()).toBe(false);
  });
  
  it('returns array representation of a heap', () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.insert('Cat', 1);
    myMaxHeap.insert('Dog', 21);
    myMaxHeap.insert('Bat', 2);
    expect(myMaxHeap.toArray()).toEqual(['Dog', 'Cat', 'Bat']);
  });
});