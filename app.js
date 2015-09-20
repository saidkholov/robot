// Application's main entry point
// Usage: ./app.js {args}
// ==========================================================================

#! /usr/bin/env node

// Load minimist - helps to parse user specified arguments
var argv = require("minimist")(process.argv.slice(2), {string : "place"});

var robot = require("./lib/robotFacade");
var help = require("./lib/help.js");

// on --place argument specified
if (argv.place) {
	var args = argv.place.split(',');
	robot.place(args);
}

// on --help argument specified 
if (argv.help) {
	help.showHelp();
}

// Do Robot actions if robot is placed i.e. --place is called 
if (robot.onSurface()) {
	for (var i = 0; i <=argv['_'].length - 1; i++) {
		switch(argv['_'][i]) {
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
		