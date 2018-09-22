

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v];
  let bucket = this._storage.get(index);
  if (bucket) {
    this._storage.each((buck, i, storage) => {
      if (i === index) {
        storage[i].push(tuple);
      }
    });
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let result = undefined;
  if (bucket) {
    this._storage.each((buck, i, storage) => {
      if (i === index) {
        buck.forEach(tuple => {
          if (tuple[0] === k) {
            result = tuple[1];
          }
        });
      }
    });
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket) {
    this._storage.each((buck, i, storage) => {
      if (i === index) {
        buck.forEach((tuple, index) => {
          if (tuple[0] === k) {
            storage[i].splice(index, 1);
          }
        });
      }
    });
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 */
