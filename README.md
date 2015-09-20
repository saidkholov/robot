# Robot

This is a simple [NodeJS](//nodejs.org) command line application. Robot accepts intructions through command line terminal. 
Robot is placed on a surface and can be manipulated throgh user input (MOVE, RIGHT, LEFT, REPORT). 

## Prerequisites

NodeJS should be installed on your machine. You can download it on [official NodeJS download page](https://nodejs.org/en/download/)

## Installation

```
$ npm install --save
```

It will install all dependencies llisted in the package.json

## Usage

`app.js` file is an entry point of the application.
To run the application start with `./app.js {OPTIONS}`.

#### OPTIONS

All option that start with "--" accept parameters and execute a specific command.

| Options 		| Params 																							| 
| ------------- | ----------------------------------------------------------------------							|
| --file		| [FILENAME] file should be inside `robot-instructions` folder.										|
| --place		| [X, Y, DIRECTIONS] X and Y are robot coordinates on axis; Direction - is the side robot is facing	|
| --help		| displays help instructions																		|
| move			| moves the robot towards the facing direction														|
| right			| turns robot 90 degrees to the right clockwise														|			
| left			| turns robot 90 degrees to the left anticlockwise													|
| report		| report the robot's current position																|

### Example 

```
$ ./app.js --place 1,2,north move right report

$ ./app.js --place=1,2,west left left move report

$ ./app.js --file=1.txt
````



## Testing

[Mocha](//mochajs.org/) Testing framework and [Chai](//chaijs.com/) assertion library has been used for testing.
In order to leverage testing on the project *mocha* needs to be installed.

```
$ npm install -g mocha
```

OR

```
$ sudo npm install -g mocha
```

To run the test:

```
$ npm test
```
OR

```
$ mocha
```
