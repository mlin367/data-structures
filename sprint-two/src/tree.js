var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(obj, objMethods) {
  for (let key in objMethods) {
    obj[key] = objMethods[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = {value: value, children: []};
  extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    let result = false;
    for (let i = 0; i < this.children.length; i++) {
      let nodeResult = false || this.contains.call(this.children[i], target);
      result = result || nodeResult;
    }
    return result;
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild has a time complexity of O(1)
 contains possibly has a time complexity of O(c^n) because of the recursive function and
 potential for any amount of children for any given node
 */
