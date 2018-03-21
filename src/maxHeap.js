module.exports = (function () {
  return function () {
    const _container = [null];
  
    // Node function constructor
    function Node(element, priority) { 
      this.element = element;
      this.priority = priority;
    }

    return {
      insert: function (element, priority) {
        // No priority is given if priority argument is ommited.
        priority = priority || 0;
        // If element argument is present
        if (!element) {
          return false;
        }
        // Push the new node
        const newNode = new Node (element, priority);
        _container.push(newNode);
        // Get the curreent index and the parent index
        let currNodeIndex = _container.length - 1;
        let parentNodeIndex = Math.floor(currNodeIndex / 2);
        
        while (_container[parentNodeIndex] && newNode.priority > _container[parentNodeIndex].priority) {
          const parent = _container[parentNodeIndex];
          _container[parentNodeIndex] = newNode;
          _container[currNodeIndex] = parent;
          currNodeIndex = parentNodeIndex;
          parentNodeIndex = Math.floor(currNodeIndex / 2);
        }
      },
      
      remove: function () {
        if (_container.length < 3) { 
          const toReturn = _container.pop();
          _container[0] = null;
          if (toReturn !== null) {  
            return toReturn;
          }
          return false;
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
        return toRemove.element;
      },
      
      peek: function () {
        if (!_container[1]) {
          return false;
        }
        return _container[1].element;
      },
      
      isEmpty: function () {
        return _container.length >= 2 ? false : true;
      },
      
      toArray: function () {
        return _container
          .filter(item => item === null ? false : true)
          .map(item => item.element);
      }
    }
  }
})();