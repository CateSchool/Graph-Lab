
# Graph Classes

To represent our graph, we will use two classes:
1. `Node.js`
2. `Graph.js` 

## Node.js
The `Node.js` class is going to keep track of each potential "destination" in our app, including the node's "adjacents"— any vertices to which the destination is connected.

Here is a basic Node.js class [adapted from Adrian Mejia](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/).

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if(index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}
```

> **QUESTION** This class only keeps track of a node's "value". What properties do you think we will need to store for each node (i.e. destination)? Take a look at the `Node.js` file in the `app` folder. What additional properties did Jonathan include?

> **QUESTION** Examine the `sketch.js` file in the `app` folder. Where does `addAdjacents()` get used? How?
 

## Graph.js
The graph class stores a map of all nodes as well as contains methods to create vertexes from nodes and edges between vertexes. Here is the constructor from *`Graph.js`*:

```javascript
class Graph {
    constructor() {
        this.nodes = new Map();
    }
```

### Map Object
A `Map` object is like the other types of object literals that we've already seen (`{ key: "value"}`). [Documentation on Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). Don't worry about the difference for now. Here is how we use the `Map` object:

```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// expected output: 1
console.log(map1.get('a'));

map1.delete('b');

// prints out each element in the Map object
map1.forEach(element => console.log(element));
```

### Methods

The follow `Graph.js` methods can be used to add / remove nodes:

* `addVertex(value)`
* `addEdge(source, destination)`
* `removeVertex(value)`
* `removeEdge(source, destination)`

The following methods visualizing the graph:
* `displayEdges()`
* `displayNodes()`
* `lightPath(path)`
* `drawLine(p1, p2, displayDist=false)`

