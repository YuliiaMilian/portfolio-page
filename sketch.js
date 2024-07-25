class ColorHelper {
  generateRandomColor() {
    return [random(255), random(255), random(255)];
  }
}

class Circle {
  constructor(x, y, size, colorHelper) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = random(1, 5);
    this.speedY = random(1, 5);
    this.colorHelper = colorHelper;
    this.color = this.colorHelper.generateRandomColor();
  }

  setSpeed(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }

  moveCircle() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width - this.size / 2 || this.x < this.size / 2) {
      this.speedX *= -1;
    }
    if (this.y > height - this.size / 2 || this.y < this.size / 2) {
      this.speedY *= -1;
    }
  }

  drawCircle() {
    fill(...this.color);
    stroke(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.size);
  }
}

class CircleManager {
  constructor(numberOfCircles, colorHelper) {
    this.circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
      const x = random(width);
      const y = random(height);
      const size = random(5, 70);
      this.circles.push(new Circle(x, y, size, colorHelper));
    }
  }

  updateCircles() {
    this.circles.forEach(circle => {
      circle.moveCircle();
      circle.drawCircle();
    });
  }
}

let circleManager;
let colorHelper;

function setup() {
  createCanvas(500, 500);
  colorHelper = new ColorHelper();
  circleManager = new CircleManager(20, colorHelper);
}

function draw() {
  background(250, 240, 202);
  circleManager.updateCircles();
}
