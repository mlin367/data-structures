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
  // let isFound = false;
  // let node = this;
  // while(!isFound) {
  //   if (node.value === target) {
  //     isFound = true;
  //   } else if (node.children.length !== 0) {
  //     for (let child of node.children) {
  //       isFound = child.value === target ? true : false;
  //     }
  //     node = node.children;
  //   } else {
  //     isFound = false;
  //   }
  // }
  // return isFound;
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
 */
