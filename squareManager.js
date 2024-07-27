class SquareManager {
  constructor(numberOfSquares) {
    this.squares = Array(numberOfSquares).fill(null).map(() => {
      const x = random(width);
      const y = random(height);
      const size = random(5, 60);
      return new Square(x, y, size);
    });
  }

  updateShapes() {
    this.squares.forEach(square => {
      square.move();
      square.draw();
    });
  }
}
