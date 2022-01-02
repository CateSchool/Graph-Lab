let cate;
let graph = new Graph();
let shortPath = [];

function preload() {
    cate = loadImage("assets/cate.png");
}

function setup() {
    createCanvas(cate.width, cate.height);
    initGraph();
}

function draw() {
    background(220);

    image(cate, 0, 0, cate.width, cate.height);

    graph.displayNodes();
    graph.displayEdges();
    graph.lightPath(shortPath);

    stroke(0);
    fill(255, 255, 0);
    text(mouseX + ', ' + mouseY, mouseX, mouseY);
}

function getTravel() {
    console.log("------");
    let start = document.getElementById("start");
    let startDorm = dorms[+start.value];
    let end = document.getElementById("end");
    let endDorm = dorms[+end.value];
    // console.log("Start: ", startDorm.name);
    // console.log("End: ", endDorm.name);
    shortPath = graph.findShortestPath(graph.nodes.get(startDorm), graph.nodes.get(endDorm));
    shortPath.push(endDorm);
    // console.log("Total Distance: " + graph.nodes.get(endDorm).distance);
    document.getElementById("distance").innerHTML(graph.nodes.get(endDorm).distance);
}

function initGraph() {
    graph.addEdge(points[0], points[1]);
    graph.addEdge(points[0], points[8]);
    graph.addEdge(points[0], points[15]);
    graph.addEdge(points[1], points[2]);
    graph.addEdge(points[2], points[7]);
    graph.addEdge(points[2], points[3]);
    graph.addEdge(points[3], points[4]);
    graph.addEdge(points[3], dorms[0]);
    graph.addEdge(points[4], points[5]);
    graph.addEdge(points[5], dorms[1]);
    graph.addEdge(points[5], points[6]);
    graph.addEdge(points[5], points[9]);
    graph.addEdge(points[6], points[7]);
    graph.addEdge(points[6], dorms[4]);
    graph.addEdge(points[7], points[8]);
    graph.addEdge(points[8], dorms[5]);
    // graph.addEdge(points[9], points[10]);
    graph.addEdge(points[9], points[14]);
    graph.addEdge(points[9], dorms[3]);
    graph.addEdge(points[9], dorms[4]);
    graph.addEdge(points[10], dorms[2]);
    graph.addEdge(points[10], dorms[3]);
    graph.addEdge(points[10], points[11]);
    graph.addEdge(points[11], points[12]);
    graph.addEdge(points[11], dorms[6]);
    graph.addEdge(points[11], points[12]);
    graph.addEdge(points[12], dorms[7]);
    graph.addEdge(points[12], points[13]);
    graph.addEdge(points[13], points[14]);
    graph.addEdge(points[13], points[15]);
    graph.addEdge(points[13], dorms[8]);
    graph.addEdge(dorms[4], dorms[5]);
}
