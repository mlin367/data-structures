

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // let nodeObj = {value: node, edges: []};
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
  for (let nodes in this) {
    if (this.hasOwnProperty(nodes) && this[nodes].includes(node)) {
      this[nodes].splice(this[nodes].indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode) && this[toNode].includes(fromNode);
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let from = this[fromNode];
  let to = this[toNode];
  from.splice(from.indexOf(toNode), 1);
  to.splice(to.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this) {
    if (this.hasOwnProperty(node)) {
      isNaN(node) ? cb(node) : cb(Number(node));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode is O(1) since it's just assignment
 contains is O(1) since it's a key look up
 remove node is O(n) since it traverses the Graph
 hasEdge is O(n) since it uses includes which traveres the arrays
 addEdge is O(1) since it is assigning a value in a fixed position (end of array)
 removeEdge is O(n) since it is uses splice to delete elements
 forEachNode is O(n) since it loops through the nodes in the graph
 */
