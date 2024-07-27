class TriangleManager {
  constructor(numberOfTriangles) {
    this.triangles = Array(numberOfTriangles).fill(null).map(() => {
      const x = random(width);
      const y = random(height);
      const size = random(5, 50);
      return new Triangle(x, y, size);
    });
  }

  updateShapes() {
    this.triangles.forEach(triangle => {
      triangle.move();
      triangle.draw();
    });
  }
}
