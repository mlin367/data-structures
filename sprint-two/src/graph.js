

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // let nodeObj = {value: node, edges: []};
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (let nodes in this.nodes) {
    if (this.nodes[nodes].includes(node)) {
      this.nodes[nodes].splice(this.nodes[nodes].indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode);
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let from = this.nodes[fromNode];
  let to = this.nodes[toNode];
  from.splice(from.indexOf(toNode), 1);
  to.splice(to.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    isNaN(node) ? cb(node) : cb(Number(node));
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
