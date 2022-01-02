class Node {

    constructor({ type, id, x, y, name = "" }) {
        this.type = type;
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name;
        this.adjacents = []; // adjacency list
        this.distance = Infinity;
        this.pathTaken = [];
    }

    addAdjacent(node) { // Where is this used? What does this do?
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.find(adj => (adj.id === node.id && adj.type === node.type));
        if (index > -1) {
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
