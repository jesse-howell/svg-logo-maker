const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes.js');

class SVG {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} fill="${this.color}" />
      </svg>
    `;
  }
}

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

  fs.writeFile('./output/shape.svg', svgString, (err) => {
    if (err) throw err;
    console.log(svgString);
  });
});
