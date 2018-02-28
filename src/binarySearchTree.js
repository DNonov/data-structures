/**
 * Binary search tree function constructor.
 * 
 * @example const BST = require('dstructures').BST;
 * const myBST = new BST();
 * @description In computer science, binary search trees (BST), sometimes called 
 * ordered or sorted binary trees, are a particular type of container: data 
 * structures that store "items" (such as numbers, names etc.) in memory. 
 * Full wikipedia article at: 
 * {@link https://en.wikipedia.org/wiki/Binary_search_tree}
 * @public
 * @constructor
 */
function BST() {
  this.root = null;
  this.parent;
  
  /**
   * Node function constructor
   * 
   * @param {any} data 
   * @param {any} left 
   * @param {any} right 
   */
  function Node (data, left, right) {
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

  /**
   * Inserts new node.
   * 
   * @param {any} data
   * @example BST.insert(10);
   *
   */
  this.insert = function (data) {
    let newNode = new Node(data, null, null);
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
   * Returns sorted array representation of the tree.
   *  
   * @returns {Array} Returns array representation of the tree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.inOrder(41); // [10, 32, 41]
   */
  this.inOrder = function () {
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
   * Returns the smallest value within the tree.
   * 
   * @returns Returns the smallest value within the tree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.min(); // 10
   */
  this.min = function () {
    const result = (function minNode(currentNode) {      
      if(currentNode.left === null) return currentNode.data;
      return minNode(currentNode.left);
    })(this.root);
    return result;
  }

  /**
   * Returns the biggest value within the tree.
   * 
   * @returns Returns the biggest value within the tree.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.max(); // 41
   * 
   */
  this.max = function () {
    const result = (function minNode(currentNode) {      
      if(currentNode.right === null) return currentNode.data;
      return minNode(currentNode.right);
    })(this.root);
    return result;
  }

  /**
   * Finds given value within the tree.
   * 
   * @param {any} data 
   * @returns Returns given value or false if the value is not present.
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.find(32); // 32
   * BST.find(72); // false
   * 
   */
  this.find = function (data) {
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

 // small private helper function for removing.
  const smallestNode = function (currentNode) {
    const result = (function minNode(currentNode) {      
      if(currentNode.left === null) return currentNode;
      return minNode(currentNode.left);
    })(this.root);
    return result;
  }

  /**
   * Removes node from the tree.
   * 
   * @param {any} data 
   * @example BST.insert(10);
   * BST.insert(32);
   * BST.insert(41);
   * BST.remove(41); // 10, 32
   */
  this.remove = function(data) {
    this.root = removeNode(this.root, data)
  }

  // This is the actual removal function 
  const removeNode = function (node , data) {
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
      node.right = removeNode(node.right, node.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  }
}

module.exports = BST;
