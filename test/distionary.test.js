const Dictionary = require('../src/dictionary');
const jasmine    = require('jasmine');

describe('Dictionary method', () => {
  it('adds key value pair', () => {
    let testDictionary = new Dictionary();
    testDictionary.add('moo', 'cat');
    expect(testDictionary.find('moo')).toBe('cat');
    testDictionary.add(2, 'dog');
    expect(testDictionary.add(3, undefined)).toBe(false);
    expect(testDictionary.add(3)).toBe(false);
    expect(testDictionary.add()).toBe(false);
    testDictionary.add(4, 'car');
    expect(testDictionary.find(2)).toBe('dog');
    expect(testDictionary.find(3)).toBe(undefined);
    expect(testDictionary.find(4)).toBe('car');
  });

  it('returns the value for the given key', () => {
    let testDictionary = new Dictionary();
    testDictionary.add('moo', 'cat');
    testDictionary.add(2, 'dog');
    testDictionary.add(3, undefined);
    testDictionary.add(4, 'car');
    expect(testDictionary.find('moo')).toBe('cat');
    expect(testDictionary.find(2)).toBe('dog');
    expect(testDictionary.find(3)).toBe(undefined);
    expect(testDictionary.find(4)).toBe('car');
    expect(testDictionary.find(23)).toBe(undefined);
  });

  it('removes the value associated to the given key', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 'cat');
    expect(testDictionary.display()).toContain('cat');
    testDictionary.remove(0);
    expect(testDictionary.find(0)).toBe(undefined);
  });
  
  it('counts all key value pairs', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 34);
    testDictionary.add('boo', 'cat');
    testDictionary.add(34, 'pig');
    expect(testDictionary.count()).toBe(3);
    testDictionary.remove(0);
    expect(testDictionary.count()).toBe(2);
    testDictionary.remove('boo');
    expect(testDictionary.count()).toBe(1);
    testDictionary.remove(34);
    expect(testDictionary.count()).toBe(0);
  });

  it('deletes all key value pairs', () => {
    let testDictionary = new Dictionary();
    testDictionary.add(0, 34);
    testDictionary.add('boo', 'cat');
    testDictionary.add(34, 'pig');
    expect(testDictionary.find(0)).toBe(34);
    expect(testDictionary.find('boo')).toBe('cat');
    expect(testDictionary.find(34)).toBe('pig');
    testDictionary.clear();
    expect(testDictionary.find(0)).toBe(undefined);
    expect(testDictionary.find('boo')).toBe(undefined);
    expect(testDictionary.find(34)).toBe(undefined);
  });
});