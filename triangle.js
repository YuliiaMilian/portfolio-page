class Triangle extends ShapeBase{
  constructor(x, y, size) {
    super(x, y, size);
    this.setSpeed(2, 5);
  }

  move() {
    this.x += this.speedX;

    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
  }

  draw() {
    super.draw();
    triangle(
      this.x, this.y - this.size,
      this.x - this.size, this.y + this.size,
      this.x + this.size, this.y + this.size
    );
  }
}
