# Test Driven Development with Jest
This project is my introduction to testing. I created 5 basic functions:
1.capitalize, 2.reverseString, 3.calculator, 4.Caesar Cipher, 5.Array Analysis and also test cases for each one using [Jest Testing Framework](https://jestjs.io/en/). This project is built according to [The Odin Project's curriculum](https://www.theodinproject.com/courses/javascript/lessons/testing-practice)

## Installation
To install jest using npm run
```bash
npm install --save-dev jest
```

## Usage
After installing jest and associated dependencies 
```bash 
run npm test
``` 
to run all tests.

## Special Note on using ES6 import statements with Jest
By default, the current version of Jest will not recognize ES6 import statements. In order for you to be able to use ES6 modules for this project you may do the following:

1.Install the @babel/preset-env package
```bash
npm i -D @babel/preset-env
```

2.Create a .babelrc file in the project’s root with the following lines of code:
```bash
{ "presets": ["@babel/preset-env"] }
```
