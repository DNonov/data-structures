const List = require('../src/list');
const jasmine = require('jasmine');
let testList = new List();

describe('List method', () => {
  it('appends element to a list', () => {
    testList.append('Jill');
    expect(testList.getElement()).toBe("Jill");
  });

  it('finds element in a list', () => {
    expect(testList.find('Jill')).toBe(0);
    expect(testList.find()).toBe(-1);
  });

  it('removes element from a list', () => {
    expect(testList.remove()).toBe(false);
    expect(testList.remove('Jill')).toBe(true);
    expect(testList.getElement()).toBe(false);
  });

  it('returns length of the list', () => {
    expect(testList.length()).toBe(0);
  });

  it('returns the list', () => {
    expect(testList.display()).toEqual([]);
    testList.append('Jill');
    expect(testList.display()).toEqual(['Jill'])
    testList.append('Bob');
    expect(testList.display()).toEqual(['Jill', 'Bob'])
  });

  it('inserts element in the list', () => {
    let insertTestCaseList = new List();
    insertTestCaseList.append('Alice');
    insertTestCaseList.append('Bob');
    insertTestCaseList.insert(1, 2);
    insertTestCaseList.insert('Jill', 'Alice');
    insertTestCaseList.insert(3);
    expect(insertTestCaseList.display()).toEqual(['Alice', 'Jill', 'Bob']);
  });

  it('deletes all elements in the list', () => {
    let deleteTestCaseList = new List();
    deleteTestCaseList.append('Alice');
    deleteTestCaseList.append('Bob');
    deleteTestCaseList.append('Jill');
    deleteTestCaseList.clear();
    expect(deleteTestCaseList.display()).toEqual([]);
  });

  it('deletes all elements in the list', () => {
    let deleteTestCaseList = new List();
    deleteTestCaseList.clear();
    expect(deleteTestCaseList.display()).toEqual([]);
  });

  it('determins if element is in the list', () => {
    let containTestCaseList = new List();
    expect(containTestCaseList.contains('Alice')).toBe(false);
    containTestCaseList.append('Alice');
    expect(containTestCaseList.contains('Alice')).toBe(true);
  });

  it('goes to first element in the list', () => {
    let headTestCaseList = new List();
    headTestCaseList.append('Alice');
    headTestCaseList.append('Bob');
    headTestCaseList.append('Jill');
    headTestCaseList.head();
    expect(headTestCaseList.getElement()).toBe('Alice');
  });

  it('goes to last element in the list', () => {
    let tailTestCaseList = new List();
    tailTestCaseList.append('Alice');
    tailTestCaseList.append('Bob');
    tailTestCaseList.append('Jill');
    tailTestCaseList.tail();
    expect(tailTestCaseList.getElement()).toBe('Jill');
  });

  it('goes to previus element in the list', () => {
    let previusTestCaseList = new List();
    previusTestCaseList.append('Alice');
    previusTestCaseList.append('Bob');
    previusTestCaseList.append('Jill');
    previusTestCaseList.tail();
    previusTestCaseList.previus();
    expect(previusTestCaseList.getElement()).toBe('Bob');
  });

  it('goes to next element in the list', () => {
    let nextTestCaseList = new List();
    nextTestCaseList.append('Alice');
    nextTestCaseList.append('Bob');
    nextTestCaseList.append('Jill');
    nextTestCaseList.next();
    expect(nextTestCaseList.getElement()).toBe('Bob');
  });

  it('returns current _position', () => {
    let currTestCaseList = new List;
    currTestCaseList.append('Alice');
    currTestCaseList.append('Bob');
    expect(currTestCaseList.currentPosition()).toBe(0);
    currTestCaseList.tail();
    expect(currTestCaseList.currentPosition()).toBe(1);
  });

  it('moves to the passed position', () => {
    let movesTestCaseList = new List();
    movesTestCaseList.append('Alice');
    movesTestCaseList.append('Bob');
    movesTestCaseList.append('Jill');
    expect(movesTestCaseList.currentPosition()).toBe(0);
    movesTestCaseList.moveTo(3);
    expect(movesTestCaseList.currentPosition()).toBe(0);
    expect(movesTestCaseList.getElement()).toBe('Alice');
    movesTestCaseList.moveTo(1);
    expect(movesTestCaseList.currentPosition()).toBe(1);
  });

  it('return current element', () => {
    let returnTestCaseList = new List;
    expect(returnTestCaseList.getElement()).toBe(false);
    returnTestCaseList.append('Alice');
    expect(returnTestCaseList.getElement()).toBe('Alice');
  });
});
