module.exports = (function () {
  // Private for all istances 
  const MaxHeap = require('./maxHeap');

  return function () {
    // Private heap for each instance
    const _heap = new MaxHeap();
    return {

      enqueue: function (element, priority) {
        if (!element) {
          return false;
        }
        _heap.insert(element, priority); 
      },
      
      dequeue: function () {   
        return _heap.remove();
      },
      
      head: function () {      
        return _heap.peek();
      },
      
      isEmpty: function () {
        return _heap.peek() === false ? true : false;
      },
      
      toArray: function () {      
        return _heap.toArray();
      }
    }
  }
})();