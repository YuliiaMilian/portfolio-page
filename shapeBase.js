class ShapeBase {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = random(1, 5);
    this.speedY = random(1, 5);
    this.color = this.generateRandomColor();
  }

  generateRandomColor() {
    return [random(255), random(255), random(255)];
  }

  setSpeed(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  
    if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.speedX *= -1;
    } else if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.speedX *= -1;
    }
  
    if (this.y > height - this.size / 2) {
      this.y = height - this.size / 2;
      this.speedY *= -1;
    } else if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.speedY *= -1;
    }
  }

  draw() {
    fill(...this.color);
    stroke([random(255), random(255), random(255)]);
  }
}
