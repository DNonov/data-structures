/**
 * Binary search tree.
 * 
 * @example const BST = require('dstructures').BinarySearchTree;
 * const myBST = new BST();
 * @description In computer science, binary search trees (BST), sometimes called 
 * ordered or sorted binary trees, are a particular type of container: data 
 * structures that store "items" (such as numbers, names etc.) in memory. 
 * Full wikipedia article at: 
 * {@link https://en.wikipedia.org/wiki/Binary_search_tree}
 * @public
 * @constructor
 */
class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  /**
   * Inserts new node in a BinarySearchTree.
   * 
   * @param {any} data Given data.
   * @example BST.insert(10);
   * @memberOf BinarySearchTree
   */
  insert (data) {
    let newNode = new _Node(data, null, null);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let parentNode;
      while (true) {
        parentNode = currentNode;
        newNode.parent = parentNode;
        if (data < currentNode.data) {
          currentNode = currentNode.left;
          if (currentNode === null) {
            parentNode.left = newNode;
            break;
          }
        } else {
          currentNode = currentNode.right;
          if (currentNode === null) {
            parentNode.right = newNode;
            break;
          }
        }
      }
    }
  }

  /**
   * Returns sorted array representation of the BinarySearchTree.
   *  
   * @returns {Array} Returns array representation of the BinarySearchTree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.inOrder(41); // [10, 32, 41]
   */
  inOrder () {
    let arr = [];
    (function Order(node) {
      if (!(node === null)) { 
        Order(node.left);
        arr.push(node.return()); 
        Order(node.right);
      }
    })(this.root);
    return arr;
  }

  /**
   * Returns the smallest value within the BinarySearchTree.
   * 
   * @returns {Any} Returns the smallest value within the BinarySearchTree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.min(); // 10
   */
  min () {
    const result = (function minNode(currentNode) {      
      if(currentNode.left === null) {
        return currentNode.data
      }
      return minNode(currentNode.left);
    })(this.root);
    return result;
  }

  /**
   * Returns the biggest value within the BinarySearchTree.
   * 
   * @returns {Any} Returns the biggest value within the BinarySearchTree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.max(); // 41
   * 
   */
  max () {
    const result = (function minNode(currentNode) {      
      if(currentNode.right === null) {
        return currentNode.data
      }
      return minNode(currentNode.right);
    })(this.root);
    return result;
  }

  /**
   * Finds given value within the BinarySearchTree.
   * 
   * @param {any} data Given data.
   * @returns {Boolean|Any} Returns given value or false if the value is not present.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.find(32); // 32
   * BST.find(72); // false
   * 
   */
  find (data) {
    let currentNode = this.root;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) return false;
    }
    return currentNode.data;
  }

  /**
   * Removes node from the BinarySearchTree.
   * 
   * @param {any} data Given data.
   * @returns {Boolean|undefined} Returns false if 'data' argument is ommited, 
   * or undefined if the 'data' argument value is not present within a BinarySearchTree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.remove(41); // 10, 32
   */
  remove (data) {
    if (!data) {
      return false;
    }
    this.root = _removeNode(this.root, data)
  }

}


// =======private section===========

// Node function constructor
// @private
function _Node (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.return = function () {
    return this.data;
  }
  this.setData = function (data) {
    this.data = data;
  }
}

// This is the actual removal function.
// @private
const _removeNode = function (node , data) {
  if (node === null) return null;
  if (node.data === data) {
    // node has no children
    if (node.left === null && node.right === null) return null;
    // node has no left child
    if (node.left === null) return node.right;
    // node has no right child
    if (node.right === null) return node.left;
    // node has two children
    var tempNode = smallestNode(node.right);
    node.data = tempNode.data;
    node.right = _removeNode(node.right, node.data);
    return node;
  } else if (data < node.data) {
    node.left = _removeNode(node.left, data);
    return node;
  } else {
    node.right = _removeNode(node.right, data);
    return node;
  }
}

// small helper function for removing.
// @private
const smallestNode = function (currentNode) {
  const result = (function minNode(currentNode) {      
    if(currentNode.left === null) {
      return currentNode
    }
    return minNode(currentNode.left);
  })(currentNode);
  return result;
}

module.exports = BinarySearchTree;