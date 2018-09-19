class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
  }

  push(value) {
    this[this.stackSize] = value;
    this.stackSize++;
  }

  pop(value) {
    this.stackSize && this.stackSize--;
    let temp = this[this.stackSize];
    delete this[this.stackSize];
    return temp;
  }

  size() {
    return this.stackSize;
  }

}
