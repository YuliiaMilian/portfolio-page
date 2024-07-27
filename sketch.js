let circleManager;
let squareManager;
let triangleManager;

function setup() {
  createCanvas(1440, 900);
  circleManager = new CircleManager(20);
  squareManager = new SquareManager(20);
  triangleManager = new TriangleManager(20);
}

function draw() {
  background(224, 247, 250);
  circleManager.updateShapes();
  squareManager.updateShapes();
  triangleManager.updateShapes();
}