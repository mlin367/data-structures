var BinarySearchTree = function(value) {

  let bst = Object.create(bTreeMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

var bTreeMethods = {

  insert: function(value) {
    let tree = Object.create(bTreeMethods);
    tree.value = value;
    tree.left = null;
    tree.right = null;
    if (value < this.value) {
      if (!this.left) {
        this.left = tree;
      } else {
        this.insert.call(this.left, value);
      }
    } else {
      if (!this.right) {
        this.right = tree;
      } else {
        this.insert.call(this.right, value);
      }
    }
  },

  contains: function(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.contains.call(this.left, value);
    } else if (value > this.value && this.right) {
      return this.contains.call(this.right, value);
    } else {
      return false;
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left) {
      this.depthFirstLog.call(this.left, cb);
    }
    if (this.right) {
      this.depthFirstLog.call(this.right, cb);
    }
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
