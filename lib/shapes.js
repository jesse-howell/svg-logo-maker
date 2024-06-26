const inquirer = require('inquirer');
const fs = require('fs');

const shapeQuestions = [
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to draw?',
    choices: ['Triangle', 'Square', 'Circle'],
  },
  {
    type: 'list',
    name: 'color',
    message: 'What color will your shape be?',
    choices: ['Red', 'Blue', 'Green'],
  },
];

class SVG {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
}
class Triangle {
  constructor() {
    // triangle specific implementation
    this.shape = 'Triangle';
    this.color = 'Red';
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

inquirer.prompt(shapeQuestions).then((shapeData) => {
  let shape;
  if (shapeData.shape === 'Triangle') {
    shape = new Triangle();
  } else if (shapeData.shape === 'Circle') {
    shape = new Circle();
  } else {
    shape = new Square();
  }

  const svg = new SVG(shape, shapeData.color);
  const svgString = svg.render();
  // Fix render methods to return correct SVG for each shape

  Triangle.prototype.render = function () {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  };

  Square.prototype.render = function () {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
  };

  Circle.prototype.render = function () {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  };

  fs.writeFile('./output/shape.svg', svgString, (err) => {
    if (err) throw err;
    console.log(svgString);
  });
});
