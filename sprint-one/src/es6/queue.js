class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.queueExit = 0;
  }

  enqueue(value) {
    this[this.queueSize] = value;
    this.queueSize++;
  }

  dequeue() {
    let temp = this[this.queueExit];
    delete this[this.queueExit];
    this.queueExit++;
    return temp;
  }

  size() {
    let diff = this.queueSize - this.queueExit;
    if (diff < 0) {
      return 0;
    } else {
      return diff;
    }
  }

}
