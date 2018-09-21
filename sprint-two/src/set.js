var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  if(this._storage.indexOf(item) !== -1) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add is O(n) since it traverses the storage
 contains is O(n) since it traverses the storage
 remove is O(n) since it shifts elements in an array
 */
