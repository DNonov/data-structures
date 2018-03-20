function MaxHeap () {
  const container = [null];

  // Node function constructor
  function Node(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.insert = function (element, priority) {
    const newNode = new Node (element, priority);
    container.push(newNode);
    let currNodeIndex = container.length - 1;
    let parentNodeIndex = Math.floor(currNodeIndex / 2);

    while (container[parentNodeIndex] && newNode.priority > container[parentNodeIndex].priority) {
      const parent = container[parentNodeIndex];
      container[parentNodeIndex] = newNode;
      container[currNodeIndex] = parent;
      currNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor(currNodeIndex / 2);
    }
  }

  this.remove = function () {
    if (container.length < 3) { 
      const toReturn = container.pop();
      container[0] = null;
      return toReturn;
    }

    const toRemove = container[1];
    container[1] = container.pop();
    let currIndex = 1;
    let [left, right] = [2 * currIndex, 2 * currIndex + 1];
    let currChildIndex = container[right] && container[right].priority >= container[left].priority ? right : left;
    while (container[currChildIndex] && container[currIndex].priority <= container[currChildIndex].priority) {
      let currNode = container[currIndex];
      let currChildNode = container[currChildIndex];
      container[currChildIndex] = currNode;
      container[currIndex] = currChildNode;
    }
    return toRemove;
  }

  this.peek = function () {
    return container[1].element;
  }
}
module.exports = MaxHeap;
