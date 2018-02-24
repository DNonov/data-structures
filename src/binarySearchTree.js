/*
* MIT License
*
* Copyright (c) 2018 Dimitar Nonov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

function BST() {
  this.root = null;
  this.parent;
  
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

  this.inOrder = function (node) {
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

  this.min = function () {
    let currentNode = this.root;
    while (!(currentNode.left === null)) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  this.max = function () {
    let currentNode = this.root;
    while (!(currentNode.right === null)) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  this.find = function (data) {
    let currentNode = this.root;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) return null;
    }
    return currentNode.data;
  }

  const smallestNode = function (node) {
    let currentNode = node.right;
    while (!(currentNode.left === null)) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  this.remove = function(data) {
    this.root = removeNode(this.root, data)
  }

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
      var tempNode = smallestNode(node);
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