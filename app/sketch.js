let cate;
let graph = new Graph();
let shortPath = [];

function preload() {
    cate = loadImage("assets/cate.png");
}

function setup() {
    const cnv = createCanvas(cate.width, cate.height);
    cnv.parent("canvasDiv");
    initGraph();
}

function draw() {
    background(220);

    image(cate, 0, 0, cate.width, cate.height);

    graph.displayNodes();
    graph.displayEdges();
    graph.lightPath(shortPath);
}

function getTravel() {
   
    let startNode = getStartNode();
    let endNode = getEndNode();
    
    graph.setAllShortestPaths(startNode);
    
    setTimeDistanceHTML(endNode.distance);
    shortestPath = endNode.getShortestPath();
}

function setTimeDistanceHTML(distance) {
    document.getElementById("distance").innerHTML = distance;
    const walkMetersPerMinute = 94; // = 3.5mph (average)
    let minutesWalk = round(distance / walkMetersPerMinute, 1);
    document.getElementById("time").innerHTML = minutesWalk;
}

function getStartNode() {
    let start = document.getElementById("start");
    let startDorm = dorms[+start.value];
    return graph.nodes.get(startDorm);
}

function getEndNode() {
    let end = document.getElementById("end");
    let endDorm = dorms[+end.value];
    return graph.nodes.get(endDorm);
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
