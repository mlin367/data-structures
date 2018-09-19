var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    let temp = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };


  return someInstance;
};
