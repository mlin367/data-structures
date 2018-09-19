var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.queueExit = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  let temp = this[this.queueExit];
  delete this[this.queueExit];
  this.queueExit++;
  return temp;
};

Queue.prototype.size = function(){
  let diff = this.queueSize - this.queueExit;
  if(diff < 0){
    return 0;
  }else{
    return diff;
  }
};
