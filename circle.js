class Circle extends ShapeBase {
  constructor(x, y, size) {
    super(x, y, size);
  }

  move() {
    this.y += this.speedY;
  
    if (this.y > width) this.y = 0;
    if (this.y < 0) this.y = width;
  }

  draw() {
    super.draw();
    let arcColor = [random(255), random(255), random(255)];

    let biteSize = PI / 8;
    let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
    let endAngle = TWO_PI - startAngle;

    ellipse(this.x, this.y, this.size);
    fill(...arcColor);
    arc(this.x, this.y, this.size, this.size, startAngle, endAngle, PIE);
  }
}
