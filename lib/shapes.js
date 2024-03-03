const inquirer = require('inquirer');
// const jest = require("jest");
// const join = require("path");
// const { writeFile } = require("fs/promises");
// const { createAsset } = require("./assets");


class SHAPES {
    constructor() {
        this.shapes = [];
    }
    draw() {
    const shape = this.getShape();
        const asset = createAsset(shape);
        this.save(asset);
    }
    getShape() { 
    return inquirer
    .prompt([
    {
      type: 'input',
      name: 'shape', 
      message: 'What shape do you want to draw?',
      choices: [
        'Triangle',
        'Square', 
        'Circle'
      ]
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color do you want to draw it in?',
      choices: [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Purple',
        'Orange',
        'Pink',
        'Black',
        'White',
        '#000000',
        '#0000FF',
        '#FF0000',
        '#FF00FF',
        '#00FF00',
        '#00FFFF',
        '#FFFF00',
        '#FFFFFF'
      ]
    }
  ])
}};

module.exports = SHAPES;