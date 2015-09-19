var robot = require("./robot");

exports.place = function() {
	robot.place();
	robot.direct();
};

exports.move = function() {
	switch(robot.direction) {
		case "north":
			robot.moveNorth();
		case "east":
			robot.moveEast();
		case "south":
			robot.moveSouth();
		case "west":
			robot.moveWest();
	}
};

exports.left = robot.left;
exports.right = robot.right;
exports.report = robot.report;

