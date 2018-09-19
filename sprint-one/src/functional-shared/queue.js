var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {queueSize: 0, queueExit: 0};
  extend(obj, queueMethods);

  return obj;
};

var extend = function(obj, methods){
  for(let key in methods){
    obj[key] = methods[key];
  }
};

var queueMethods = {

  enqueue : function(value){
    this[this.queueSize] = value;
    this.queueSize++;
  },

  dequeue : function(){
    let temp = this[this.queueExit];
    delete this[this.queueExit];
    this.queueExit++;
    return temp;
  },

  size : function(){
    let diff = this.queueSize - this.queueExit;
    if(diff < 0){
      return 0;
    }else{
      return diff;
    }
  }
};
