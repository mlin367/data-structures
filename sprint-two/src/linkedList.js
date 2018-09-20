var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = list.tail = Node(value);
    }else if(!list.head.next){
      list.tail =  Node(value);
      list.head.next = list.tail;
    }else{
      list.tail.next = Node(value);
      list.tail = Node(value);
    }
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail has a time complexity of O(1)
 removeHead has a time complexity of O(1) only because it's the head, otherwise it'd be O(n)
 contains has a time complexity of O(n) because you have to traverse the list to find the value
 */
