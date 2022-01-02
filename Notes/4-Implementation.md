# Implementing Dijkstra's Algorithm

You will be implementing `setShortestPaths(startNode)` method in the `Graph.js` file. For **every** node in the graph, this method:
* updates the `node.distance` with that node's distance to the start node
* updates `node.pathTaken` (an array that stores the shortest route from start node through other nodes).


## Pseudocode

1. Use a loop in `setShortestPaths()` to initialize every graph node's:
   1. `distance` property to Infinity and 
   2. `pathTaken` property to an empty array
2. Initialize the distance of the startNode to 0
3. Create an unchecked array and fill it with all the nodes
4. While there are unchecked nodes left in the array:
    * Select the unchecked node `b` with the shortest distance to startNode
    * Mark b as checked
5. For each unvisited neighbor node `a` adjacent to `b`:
    * If the distance from startNode to `b`, plus the distance from `b` to `a`, is less than `a`'s stored distance, update `a`'s distance.

```javascript
dijkstrasShortestPath(startNode, endNode) {
    // set all nodes distance to infinity
    // set startNode distance to 0
    // add all nodes to unchecked array
    while( /* unchecked nodes? */) {
        // get node with lowest distance
        // mark this node as checked
        // for each of its adjacent, unchecked neighbors,
            // check if you need to update the adjacent's distance
    }
}
```

