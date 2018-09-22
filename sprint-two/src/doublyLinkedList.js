var DoublyLinkedList = function () {

  let list = {};
  list.head = null;
  list.tail = null;
    
  list.addToTail = function(value) {
    if (!list.head) {
      list.head = list.tail = Node(value);
    } else {
      let temp = list.tail;
      list.tail.next = Node(value);
      list.tail = Node(value);
      list.tail.previous = temp;
    }
  };

  list.addToHead = function(value) {
    if (!list.head) {
      list.head = list.tail = Node(value);
    } else {
      let temp = list.head;
      list.head.previous = Node(value);
      list.head = Node(value);
      list.head.next = temp;
    }
  };

  list.removeTail = function() {
    let tailValue = list.tail.value;
    if (list.tail.previous) {
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
    }
    return tailValue;

  };

  list.removeHead = function() {
    let headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    let targetFound = false;
    let node = list.head;
    while(!targetFound && node){
      if(node.value === target){
        targetFound = true;
      }else{
        node = node.next;
      }
    }
    return targetFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
