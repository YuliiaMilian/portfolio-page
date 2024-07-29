class Square extends ShapeBase {
  constructor(x, y, size) {
    super(x, y, size);
    this.setSpeed(5, 10);
    this.rotation = 0;
  }

  move() {
    super.move();
    this.rotation += 0.05;
  }

  draw() {
    super.draw();
    push();
    translate(this.x + this.size / 2, this.y + this.size / 2);
    rotate(this.rotation);
    fill(this.generateDynamicColor());
    rectMode(CENTER);
    square(0, 0, this.size);
    pop();
  }

  generateDynamicColor() {
    return [
      (this.color[0] + frameCount) % 255,
      (this.color[1] + frameCount / 2) % 255,
      (this.color[2] + frameCount / 3) % 255
    ];
  }
}
