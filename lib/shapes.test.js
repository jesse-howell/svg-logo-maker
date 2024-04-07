const shape = new Triangle();
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
