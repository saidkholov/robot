//Robot abstract module
var surface = require("./surface");


// Private
var _step = 1;

exports.directions = ["north", "east", "south", "west"];

// Public
exports.x = null;
exports.y = null;
exports.direction = null;


exports.direct = function(direction) {
	exports.direction = direction;
};

exports.place = function(x, y) {

	if (x <= surface.width() && y <= surface.height()) {
		exports.x = x;
		exports.y = y;
	}

};

//Move robot around 
exports.moveNorth = function() {
	if(exports.y !== surface.height()) {
		exports.y += _step;
	}
};
exports.moveEast = function() {
	if(exports.x !== surface.width()) {
		exports.x += _step;
	}
};
exports.moveSouth = function() {
	if(exports.y !== 0) {
		exports.y -= _step;
	}
};
exports.moveWest = function() {
	if(exports.x !== 0) {
		exports.x -= _step;
	}
};

exports.right = function() {
	var direction_length = exports.directions.length -1;
	if (exports.direction === exports.directions[direction_length]) {
		exports.direct(exports.directions[0]); 
	} else {
		for (var i = direction_length; i >= 0; i--) {
			if(exports.direction  === exports.directions[i]) {
				return exports.direct(exports.directions[i + 1]);
			}
		};
	}
};

exports.left = function() {
	var direction_length = exports.directions.length - 1;

	if (exports.direction !== exports.directions[0]) {
		for (var i = direction_length; i >= 0; i--) { 
			if(exports.direction  === exports.directions[i]) {
				return exports.direct(exports.directions[i]);
			}
		};
	 } else {
	 	exports.direct(exports.directions[direction_length]); 
	}
};

exports.report = function() {
	console.log("My position: " + exports.x + ":" + exports.y);
	console.log("");
	console.log("I am facing " + exports.direction);
};
