

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v];
  let bucket = this._storage.get(index);
  if (bucket) {
    this._storage.each((buck, i, storage) => {
      if (i === index) {
        storage[i].push(tuple);
        this._size++;
      }
    });
  } else {
    this._storage.set(index, [tuple]);
    this._size++;
  }
  if (this._size  >= 0.75 * this._limit) {
    this.resize(true);
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
            this._size--;
          }
        });
      }
    });
  }
  if (this._size  < 0.25 * this._limit) {
    this.resize(false);
  }
};

HashTable.prototype.resize = function(needsDouble) {
  let oldBuckets = [];
  this._size = 0;
  this._limit = needsDouble ? this._limit * 2 : this._limit * 0.5;
  this._storage.each((bucket, i, storage) => {
    if (bucket && bucket.length !==0) {
      oldBuckets.push(bucket);
    }
  });
  this._storage = LimitedArray(this._limit);
  for (let bucket of oldBuckets) {
    if (bucket.length === 1) {
      this.insert(bucket[0][0], bucket[0][1]);
    } else {
      bucket.forEach(tuple => {
        this.insert(tuple[0], tuple[1]);
      });
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 */
