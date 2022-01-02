class Graph {
    constructor() {
        this.nodes = new Map();
        this.notChecked = [];
    }

    ///////////////////////////////////////////////
    // IMPLEMENT ME
    dijkstrasShortestPath() {
        
    }
    ///////////////////////////////////////////////

    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);
        destinationNode.addAdjacent(sourceNode);

        return [sourceNode, destinationNode];
    }

    displayEdges() {
        this.nodes.forEach(node => {
            for (const adj of node.getAdjacents()) {
                stroke(130, 247, 255);
                line(node.x, node.y, adj.x, adj.y);
            }
        });
    }

    displayNodes() {
        this.nodes.forEach(node => {
            if (node.type === "dorm") {
                fill(0, 255, 0);
                ellipse(node.x, node.y, 10);
                stroke(0);
                text(node.name, node.x, node.y - 3);
            }
            else {
                stroke(0);
                fill(255, 255, 0);
                ellipse(node.x, node.y, 10);
            }
        });
    }

    addVertex(value) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value);
        if (current) {
            for (const node of this.nodes.values()) {
                node.removeAdjacent(current);
            }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);
            destinationNode.removeAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];
    }

    lightPath(path) {
        for (let i = 0; i < path.length - 1; i++) {
            this.drawLine(path[i], path[i + 1], true);
        }
    }

    drawLine(p1, p2, displayDist = false) {
        stroke(255, 130, 226);
        line(p1.x, p1.y, p2.x, p2.y);

        if (displayDist) {
            let avX = (p1.x + p2.x) / 2;
            let avY = (p1.y + p2.y) / 2;
            let d = round(getDistanceMeters(p1, p2)) + "m";

            stroke(0);
            fill(255, 255, 0);
            text(d, avX, avY);
        }
    }

}
