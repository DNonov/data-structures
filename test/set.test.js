const Set = require('../src/set');

describe('Set method', () => {
  let set;

  beforeEach(() => {
    set = new Set();
  });

  it('adds an element in a set', () => {
    expect(set.add(1)).toBe(true);
  });

  it('keeps elements unique in a set', () => {
    set.add(1);
    expect(() => set.add(1)).toThrow(new Error('1 is already member of the set.'));
  });

  it('stores different types in a set', () => {
    expect(set.add(1)).toBe(true);
    expect(set.add('cat')).toBe(true);
  });

  it('throws error if remove is called without argument', () => {
    expect(() => set.remove()).toThrow(new Error('undefined or missing argument'));
  });

  it('throws error if element is not member of a set', () => {
    expect(() => set.remove(1)).toThrow(new Error('1 is not a member of the set.'));
  });

  it('removes element from a set ', () => {
    set.add(1);
    expect(set.remove(1)).toBe(true);
  });

  it('returns array representation of a set when call toArray', () => {
    set.add(1);
    set.add(2);
    expect(set.toArray()).toEqual([1, 2]);
  });

  it('checks if element is a member of the set', () => {
    expect(set.contains(1)).toBe(false);
    set.add(1);
    expect(set.contains(1)).toBe(true);
    expect(set.contains(2)).toBe(false);
  });

  it('throws error if union is called without argument', () => {
    expect(() => set.union()).toThrow(new Error('undefined or missing argument'));
  });

  it('throws error if argument of union is not a set', () => {
    expect(() => set.union(12)).toThrow(new Error('The argument is not an instance of a set.'));
  });

  it('unites two sets', () => {
    const set2 = new Set();
    set2.add(2);
    set.add(1);
    expect(set.union(set2).toArray()).toEqual([1, 2]);
  });

  it('throws error if intersect is called without argument', () => {
    expect(() => set.intersect()).toThrow(new Error('undefined or missing argument'));
  });

  it('throws error if argument of intersect is not a set', () => {
    expect(() => set.intersect(12)).toThrow(new Error('The argument is not an instance of a set.'));
  });

  it('returns intersect of two sets', () => {
    const set2 = new Set();
    set2.add(2);
    set2.add(1);
    set.add(1);
    set.add(3);
    expect(set.intersect(set2).toArray()).toEqual([1]);
  });

  it('returns empty set if there is not members in common', () => {
    const set2 = new Set();
    set2.add(2);
    set2.add(1);
    set.add(4);
    set.add(3);
    expect(set.intersect(set2).toArray()).toEqual([]);
  });

  it('throws error if argument of subset is not a set', () => {
    expect(() => set.subset(12)).toThrow(new Error('The argument is not an instance of a set.'));
  });

  it('throws error if subset is called without argument', () => {
    expect(() => set.intersect()).toThrow(new Error('undefined or missing argument'));
  });

  it('returns false if subset is called and the given set is smaller then the set', () => {
    const set2 = new Set();
    set2.add(1);
    set.add(3);
    set.add(2);
    expect(set.subset(set2)).toEqual(false);
  });

  it('returns true if a set is a subset of the given set', () => {
    const set2 = new Set();
    set2.add(1);
    set.add(1);
    set.add(2);
    expect(set2.subset(set)).toEqual(true);
  });

  it('throws error if argument of difference is not a set', () => {
    expect(() => set.difference(12)).toThrow(new Error('The argument is not an instance of a set.'));
  });

  it('throws error if difference is called without argument', () => {
    expect(() => set.difference()).toThrow(new Error('undefined or missing argument'));
  });

  it('returns empty set if get difference of two empty sets', () => {
    const set2 = new Set();
    expect(set.difference(set2).toArray()).toEqual([]);
  });

  // TODO: Add difference on set2
  it('returns a set difference of two sets', () => {
    const set2 = new Set();
    set.add(1);
    set.add(2);
    set2.add(1);
    expect(set.difference(set2).toArray()).toEqual([2]);
  });

  it('returns size 0 of an empty set', () =>{
    expect(set.size()).toEqual(0);
  });

  it('returns the size of a non-empty set', () =>{
    set.add(1);
    expect(set.size()).toEqual(1);
  });
});
