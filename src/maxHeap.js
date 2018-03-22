class MaxHeap {

  constructor(){
    // Underlying array
    // @private
    this._container = [null];
  }

  insert (element, priority) {
    // No priority is given if priority argument is ommited.
    priority = priority || 0;
    // If element argument is present
    if (!element) {
      return false;
    }
    // Push the new node
    const newNode = new _Node (element, priority);
    this._container.push(newNode);
    // Get the curreent index and the parent index
    let currNodeIndex = this._container.length - 1;
    let parentNodeIndex = Math.floor(currNodeIndex / 2);
    
    while (this._container[parentNodeIndex] && newNode.priority > this._container[parentNodeIndex].priority) {
      const parent = this._container[parentNodeIndex];
      this._container[parentNodeIndex] = newNode;
      this._container[currNodeIndex] = parent;
      currNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor(currNodeIndex / 2);
    }
  }

  remove () {
    if (this._container.length < 3) { 
      const toReturn = this._container.pop();
      this._container[0] = null;
      if (toReturn !== null) {  
        return toReturn;
      }
      return false;
    }
    
    const toRemove = this._container[1];
    this._container[1] = this._container.pop();
    let currIndex = 1;
    let [left, right] = [2 * currIndex, 2 * currIndex + 1];
    let currChildIndex = this._container[right] && this._container[right].priority >= this._container[left].priority ? right : left;
    while (this._container[currChildIndex] && this._container[currIndex].priority <= this._container[currChildIndex].priority) {
      let currNode = this._container[currIndex];
      let currChildNode = this._container[currChildIndex];
      this._container[currChildIndex] = currNode;
      this._container[currIndex] = currChildNode;
    }
    return toRemove.element;
  }

  peek () {
    if (!this._container[1]) {
      return false;
    }
    return this._container[1].element;
  }

  isEmpty () {
    return this._container.length >= 2 ? false : true;
  }

  toArray () {
    return this._container
      .filter(item => item === null ? false : true)
      .map(item => item.element);
  }
}

// Node function constructor 
// @private
function _Node(element, priority) { 
  this.element = element;
  this.priority = priority;
}

module.exports = MaxHeap;