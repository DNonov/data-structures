const Set = require('../src/set');

describe('Set method', () => {
  let testSet;
  let set;
  let testSet1;
  let testSet2;

  beforeEach(() => {
    set = new Set();
    testSet = new Set();
    testSet1 = new Set();
    testSet2 = new Set();
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
    expect(() => set.remove()).toThrow(new Error('undefined or missing argument.'));
  });

  it('throws error if element is not member of a set', () => {
    expect(() => set.remove(1)).toThrow(new Error('1 is not a member of the set.'));
  });

  it('removes element from a set ', () => {
    testSet.add(1);
    expect(testSet.remove(1)).toBe(true);
  });

  it('checks if element is a member of the set', () => {
    expect(testSet.contains(1)).toBe(false);
    testSet.add(1);
    expect(testSet.contains(1)).toBe(true);
    expect(testSet.contains(2)).toBe(false);
  });

  it('implements union on two sets', () => {
    testSet1.add(1);
    testSet2.add(2);
    let unitetSet1;
    expect(unitetSet1 = testSet1.union()).toBe(false);
    expect(unitetSet1 = testSet1.union(1)).toBe(false);
    expect(unitetSet1 = testSet1.union('cat')).toBe(false);
    expect(unitetSet1 = testSet1.union([])).toBe(false);
    expect(unitetSet1 = testSet1.union({})).toBe(false);
    let unitedSet = testSet1.union(testSet2);
    expect(unitedSet.display()).toContain(1);
    expect(unitedSet.display()).toContain(2);
  });

  it('implements intersection of sets', () => {
    let intersectSet;
    expect(intersectSet = testSet1.intersect()).toBe(false);
    expect(intersectSet = testSet1.intersect('cat')).toBe(false);
    expect(intersectSet = testSet1.intersect(1)).toBe(false);
    expect(intersectSet = testSet1.intersect([])).toBe(false);
    expect(intersectSet = testSet1.intersect({})).toBe(false);
    testSet1.add(1);
    testSet1.add(2);
    testSet1.add(3);
    let testSet2 = new Set();
    testSet2.add(2);
    testSet2.add(4);
    testSet2.add(5);
    let intersect = testSet1.intersect(testSet2);
    expect(intersect.display()).toEqual([2]);
    let testSet11 = new Set();
    testSet11.add(1);
    testSet11.add(3);
    testSet11.add(5);
    let testSet21 = new Set();
    testSet21.add(2);
    testSet21.add(4);
    testSet21.add(6);
    let intersect1 = testSet11.intersect(testSet21);
    expect(intersect1.display()).toEqual([]);
    let testSet12 = new Set();
    testSet12.add(1);
    testSet12.add(3);
    testSet12.add(5);
    let testSet22 = new Set();
    testSet22.add(1);
    testSet22.add(3);
    testSet22.add(5);
    let intersect2 = testSet12.intersect(testSet22);
    expect(intersect2.display()).toEqual([1, 3, 5]);
    let testSet13 = new Set();
    let testSet23 = new Set();
    let intersect3 = testSet13.intersect(testSet23);
    expect(intersect3.display()).toEqual([]);
  });

  it('cheks if the set is subset of a given set', () => {
    expect(testSet1.subset()).toBe(false);
    expect(testSet1.subset(1)).toBe(false);
    expect(testSet1.subset('cat')).toBe(false);
    expect(testSet1.subset([])).toBe(false);
    expect(testSet1.subset({})).toBe(false);
    expect(testSet1.subset(testSet2)).toBe(true);
    testSet1.add(1);
    testSet1.add(2);
    testSet1.add(3);
    testSet2.add(1);
    testSet2.add(2);
    testSet2.add(3);
    expect(testSet1.subset(testSet2)).toBe(true);
    testSet2.remove(2);
    expect(testSet1.subset(testSet2)).toBe(false);
    testSet2.add(2);
    testSet2.add(5);
    expect(testSet1.subset(testSet2)).toBe(true);
  });

  it('returns the difference of two sets', () => {
    expect(testSet1.difference()).toBe(false);
    expect(testSet1.difference(1)).toBe(false);
    expect(testSet1.difference('cat')).toBe(false);
    expect(testSet1.difference([])).toBe(false);
    expect(testSet1.difference({})).toBe(false);
    expect(testSet1.difference(testSet2).display()).toEqual([]);
    testSet1.add(1);
    testSet1.add(2);
    testSet1.add(3);
    testSet2.add(1);
    testSet2.add(3);
    expect(testSet1.difference(testSet2).display()).toEqual([2]);
    testSet1.add(4);
    expect(testSet1.difference(testSet2).display()).toEqual([2, 4]);
    testSet2.add(2);
    testSet2.add(4);
    testSet2.add(5);
    expect(testSet1.difference(testSet2).display()).toEqual([]);
  });
});
