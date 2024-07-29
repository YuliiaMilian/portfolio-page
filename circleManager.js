class CircleManager {
  constructor(numberOfCircles) {
    this.circles = Array(numberOfCircles).fill(null).map(() => {
      const x = random(width);
      const y = random(height);
      const size = random(5, 70);
      return new Circle(x, y, size);
    });
  }

  updateShapes() {
    this.circles.forEach(circle => {
      circle.move();
      circle.draw();
    });
  }
}
