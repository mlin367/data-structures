var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {stackSize: 0};

  extend(obj, stackMethods);

  return obj;
};

var extend = function(obj, methods){
  for(let key in methods){
    obj[key] = methods[key];
  }
};

var stackMethods = {

  push: function(value){
    this[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function(){
    this.stackSize && this.stackSize--;
    let temp = this[this.stackSize];
    delete this[this.stackSize];
    return temp;
  },

  size: function(){
    return this.stackSize;
  }
};
