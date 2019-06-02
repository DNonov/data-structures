const BST = require('../src/binarySearchTree');

describe('BST method', () => {
  let myBST;

  beforeEach(() => {
    myBST = new BST();
  });

  it('finds the smallest value', () => {
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    expect(myBST.min()).toEqual(2);
  });

  it('finds the biggest value', () => {
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    expect(myBST.max()).toEqual(47);
  });

  it('finds given value', () => {
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    expect(myBST.find(2)).toEqual(2);
    expect(myBST.find(23)).toEqual(23);
  });

  it('removes given node', () => {
    expect(myBST.remove(23)).toBe(undefined);
    expect(myBST.remove()).toBe(false);
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    myBST.remove(2);
    expect(myBST.inOrder()).toEqual([4, 17, 23, 23, 47]);
    myBST.remove(23);
    expect(myBST.inOrder()).toEqual([4, 17, 23, 47]);
  });
});