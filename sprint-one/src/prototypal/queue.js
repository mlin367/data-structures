var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.queueSize = 0;
  obj.queueExit = 0;

  return obj;
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
