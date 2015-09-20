// Robot Facade module 
// provides a facade for robot.js module and encapsulates it's functinality behind the scenes
// ============================================================================

var robot = require("./robot");

// Inherit method from robot.js
exports.left = robot.left;
exports.right = robot.right;
exports.report = robot.report;
exports.reset = robot.reset;


// Put robot on axis and provide a facing direction
exports.place = function(args) {
	if (args.length == 3) {
		if (robot.direct(args[2])) {
			robot.place(parseInt(args[0]), parseInt(args[1]));
		}
	} else {
		console.log("	--place command accepts three arguments: x,y,direction");
	}
};

// Validate if robot is placed
exports.onSurface = function() {
	if (robot.direction && robot.x && robot.y) {
		return true;
	} else {
		return false;
	}
};

exports.move = function() {
	switch(robot.direction) {
		case "north":
			robot.moveNorth();
			break;
		case "east":
			robot.moveEast();
			break;
		case "south":
			robot.moveSouth();
			break;
		case "west":
			robot.moveWest();
			break;
	}
	
};


