(function () {
  return module.exports = {
    BST:              require("./src/binarySearchTree"),
    Dictionary:       require("./src/dictionary"),
    DoublyLinkedList: require("./src/doublyLinkedList"),
    LinkedList:       require("./src/linkedList"),
    List:             require("./src/list"),
    MaxHeap:          require("./src/maxHeap"),
    MinHeap:          require("./src/minHeap"),
    PriorityQueueMax: require("./src/priorityQueueMax"),
    PriorityQueueMin: require("./src/priorityQueueMin"),
    Queue:            require("./src/queue"),
    _Set:             require("./src/set"),
    Stack:            require("./src/stack")
  }
})();