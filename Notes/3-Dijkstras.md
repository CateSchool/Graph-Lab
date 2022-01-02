# Dijkstras Algorithm

## Overview

## Pseudocode

1. Mark all nodes as not checked. 
2. Create a list of not checked nodes.
3. Set a temporary distance value for all nodes. 
   1. Set the starting node's temporary distance to 0, and all other nodes' tempDist to Infinity. 
      1. (Hint: Try literally setting it equal to Infinity) The temporary distance of a node is the length of the shortest path found so far between the node and the starting node. Set the current node as the starting node.
4. For the current node, find the temporary distances of each of its NOT CHECKED neighbours. (Think about why you wouldn't want to consider a neighbour that has already been checked.)
For example, the distance of current node A is 10, and the distance from A to its neighbour B is 12, so the temporary distance of node B through node A is 22. If the original temporary distance of node B is greater than the new temporary distance, change the temporary distance of node B to the new temporary distance. Also set the path of node B equal to the path of node A, and add node A to the end of the path of node B. [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
4. Remove the node you just checked from the list of not checked nodes. 
5. If the end node is marked as checked (Reaching the destination), or the unchecked node with the least distance has a distance of Infinity (Meaning there is no connection between the starting node and the end node), then stop. You've finished.
6. Else, set the unchecked node with the least distance as the current node. Start again from step 3.