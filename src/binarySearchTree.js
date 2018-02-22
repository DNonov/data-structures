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
      if (currentNode === null) {return null;}
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

  this.remove = function (data) {
    let currentNode = this.root;
    // find the node
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) {return null;}
    }
    if (currentNode.left === null && currentNode.right === null) {
      // if the node is leaf
      if (currentNode.parent.left !== null && currentNode.parent.left.data === currentNode.data) {
        currentNode.parent.left = null;
      } else {
        currentNode.parent.right = null;
      }
    } else {
      // if the node has a child or children
      if (currentNode.parent.left !== null && currentNode.parent.left.data === currentNode.data) {
        currentNode.parent.left.setData(smallestNode(currentNode).data);
        if (smallestNode(currentNode).parent.left == null) {
          smallestNode(currentNode).parent.right = null;
        } else {
          smallestNode(currentNode).parent.left = null;
        }
      } else {
        currentNode.parent.right.setData(smallestNode(currentNode).data);
        if (smallestNode(currentNode).parent.left == null) {
          smallestNode(currentNode).parent.right = null;
        } else {
          smallestNode(currentNode).parent.left = null;
        }
      }
    }
  }
}

module.exports = BST;