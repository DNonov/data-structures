const BST        = require('../src/binarySearchTree');
const jasmine    = require('jasmine');

describe('BST method', () => {
  it('insearts new node', () => {
    let myBST = new BST();
    myBST.insert(1);
    expect(myBST.inOrder()).toEqual([1]);
    myBST.insert(2);
    expect(myBST.inOrder()).toEqual([1, 2]);
    myBST.insert('cat');
    expect(myBST.inOrder()).toEqual([1, 2, 'cat']);
  });
  it('finds the smallest value', () => {
    let myBST = new BST();
    myBST.insert(47); 
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    expect(myBST.min()).toEqual(2);
  });
  it('finds the biggest value', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);  
    expect(myBST.max()).toEqual(47);
  });
  it('finds given value', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);  
    expect(myBST.find(2)).toEqual(2);
    expect(myBST.find(23)).toEqual(23);
  });
  it('removes given node', () => {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(23);
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(17);
    myBST.remove(2);  
    expect(myBST.inOrder()).toEqual([4, 17, 23, 47]);
    myBST.remove(23);
    expect(myBST.inOrder()).toEqual([4, 17, 47]);
  });
});