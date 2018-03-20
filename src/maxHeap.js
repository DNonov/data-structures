function MaxHeap () {
  const _container = [null];

  // Node function constructor
  function Node(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.insert = function (element, priority) {
    const newNode = new Node (element, priority);
    _container.push(newNode);
    let currNodeIndex = _container.length - 1;
    let parentNodeIndex = Math.floor(currNodeIndex / 2);

    while (_container[parentNodeIndex] && newNode.priority > _container[parentNodeIndex].priority) {
      const parent = _container[parentNodeIndex];
      _container[parentNodeIndex] = newNode;
      _container[currNodeIndex] = parent;
      currNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor(currNodeIndex / 2);
    }
  }

  this.remove = function () {
    if (_container.length < 3) { 
      const toReturn = _container.pop();
      _container[0] = null;
      return toReturn;
    }

    const toRemove = _container[1];
    _container[1] = _container.pop();
    let currIndex = 1;
    let [left, right] = [2 * currIndex, 2 * currIndex + 1];
    let currChildIndex = _container[right] && _container[right].priority >= _container[left].priority ? right : left;
    while (_container[currChildIndex] && _container[currIndex].priority <= _container[currChildIndex].priority) {
      let currNode = _container[currIndex];
      let currChildNode = _container[currChildIndex];
      _container[currChildIndex] = currNode;
      _container[currIndex] = currChildNode;
    }
    return toRemove;
  }

  this.peek = function () {
    return _container[1].element;
  }

  this.isEmpty = function () {
    if (_container[1] !== null) {
      return false;
    }
    return true;
  }

  this.toArray = function () {
    return _container;
  }
}
module.exports = MaxHeap;
