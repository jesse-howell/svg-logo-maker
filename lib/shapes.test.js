const shape = new { Triangle, Square, Circle }();
shape.setColor('blue');
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);

// Triangle class
class Triangle {
  constructor() {
    // triangle specific implementation
    this.shape = shape;
    this.color = color;
  }

  render() {
    // return triangle SVG
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class
class Square {
  constructor() {
    // square specific implementation
    this.shape = shape;
    this.color = color;
  }

  render() {
    // return square SVG
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class
class Circle {
  constructor() {
    // circle specific implementation
    this.shape = shape;
    this.color = color;
  }

  render() {
    // return circle SVG
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
};
describe('render', () => {
  test('Triangle render returns correct SVG', () => {
    const triangle = new Triangle();
    triangle.color = 'red';
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });

  test('Square render returns correct SVG', () => {
    const square = new Square();
    square.color = 'green';
    expect(square.render()).toEqual(
      '<rect x="50" y="50" width="100" height="100" fill="green" />'
    );
  });

  test('Circle render returns correct SVG', () => {
    const circle = new Circle();
    circle.color = 'blue';
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });
});

describe('SVG', () => {
  test('SVG renders correct shape SVG', () => {
    const triangle = new Triangle();
    triangle.color = 'orange';
    const svg = new SVG(triangle);
    expect(svg.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
    );
  });
});
