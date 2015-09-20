#!/usr/bin/env node

// Application's main entry point
// Usage: ./app.js {args}
// ==========================================================================

// Load minimist - helps to parse user specified arguments
var minimist = require("minimist");
var argv = minimist(process.argv.slice(2), {string : "place"});

var robot = require("./lib/robotFacade");
var help = require("./lib/help.js");

// when --file argument specified override further instructions
if(argv.file) {
	fs = require('fs');
	try {
		var input  = fs.readFileSync(argv.file).toString();
	} catch(e) {
		console.error(e);
		process.exit(0);
	}
	var commands = input.split(" ");
	argv = minimist(commands, {string : "place"});
}

// when --place argument specified
if (argv.place) {
	var args = argv.place.split(',');
	robot.place(args);
}

// when --help argument specified 
if (argv.help) {
	help.showHelp();
}

// Do Robot actions if robot is placed i.e. --place is called 
if (robot.onSurface()) {
	for (var i = 0; i <=argv._.length - 1; i++) {
		switch(argv._[i]) {
			case "left" :
				robot.left();
				break;
			case "right" :
				robot.right();
				break;
			case "report" :
				robot.report();
				break;
			case "move" :
				robot.move();
				break;
			default :
				help.showHelp();
		}
	}
}		
