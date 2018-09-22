describe('doublyLinkedList', function() {
  var doublyLinkedList;
  
  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });
  
  it('should have a head and a tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });
  
  it('should have methods named "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList).to.have.property('addToHead');
    expect(doublyLinkedList).to.have.property('removeTail');
  });
  
  it('should designate a new head and tail when a node is added to the head of an empty list', function() {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });
  
  it('should designate a new head and tail when a node is added to the head of a non-empty list', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.value).to.equal(6);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });
  
  it ('should determine whether a list contains a value', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.contains(5)).to.equal(true);
  });
  
  it('should return the removed value', function() {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });
  
  it('should have nodes with a next property', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.next.value).to.equal(5);
  });
  
  it('should have nodes with a previous property', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.tail.previous.value).to.equal(3);
  });
  
  // Note: each node object will need to have 
  // a new .previous property pointing
  // to the node behind it (or to null when appropriate);
  // this is what makes it a doubly-linked list.
  
});