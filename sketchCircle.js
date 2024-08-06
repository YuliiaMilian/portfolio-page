class Circle {
  constructor(x, y) {
    this.id = `${x},${y}`;
    this.x = x;
    this.y = y;
    this.size = random(7, 120);
    this.color = color(random(255), random(255), random(255));
    this.strokeColor = color(random(255), random(255), random(255));
  }

  draw() {
    fill(this.color);
    stroke(this.strokeColor);
    ellipse(this.x, this.y, this.size);
  }
}

let circlesSet = new Set();
let circlesMap = new Map();

function setup() {
  createCanvas(1440, 900);
  background(224, 247, 250);
}

function draw() {
  circlesSet.forEach(circleId => {
    let circle = circlesMap.get(circleId);
    circle.draw();
  });
}

function mousePressed() {
  let circle = new Circle(mouseX, mouseY);

  if (!circlesSet.has(circle.id)) {
    circlesSet.add(circle.id);
    circlesMap.set(circle.id, circle);
  }
}
