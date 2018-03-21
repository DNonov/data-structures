const _maxContainer = require('./maxHeap');
const _maxContainer = require('./maxHeap');

function PriorityQueue(priorityDirection) {
  priorityDirection = priorityDirection || 'max';
  let _container;
  if (priorityDirection === "max") {_container = _maxContainer;}
  if (priorityDirection === "min") {_container = _minContainer;}

  this.enqueue = function (element, priority) {
    if (element) {      
      _container.insert(element, priority);
    }
    console.error(`PriorityQueue.enqueue(): Arguments missing!`);
    return false;
  }

  this.dequeue = function () {
    if (!_container[1]) {      
      return _container.remove();
    }
    console.error(`PriorityQueue.remove(): Empty PriorityQueue!`);
    return false;
  }

  this.head = function () {
    if (_container[1]) {      
      return _container[1];
    }
    console.error(`PriorityQueue.head(): Empty PriorityQueue!`);
    return false;
  }

  this.isEmpty = function () {
    return _container.length >= 2 ? false : true;
  }

  this.toArray = function () {
    if (!_container.isEmpty()) {      
      _container.shift();
      return _container.map(item => item.element);
    }
    console.error(`PriorityQueue.head(): Empty PriorityQueue!`);
    return false;
  }
}