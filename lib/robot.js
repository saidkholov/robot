// Robot abstract module
// Base robot module that provides core actions for a Robot
//===========================================================================

var surface = require("./surface");

var _step = 1;

// Set default Robot settings as null, as it is not placed on the surface yet
exports.x = null;
exports.y = null;
exports.direction = null;

exports.directions = ["north", "east", "south", "west"];

// Change Robot's direction
exports.direct = function(direction) {
	if (exports.directions.indexOf(direction) > -1) {
		exports.direction = direction;
		return direction;
	} else {
		console.log("direction parameter needs to be one of these values: " + exports.directions.join(", ") )
		return false;
	}
};

//Reset axis and direction 
exports.reset = function(x, y) {
	exports.x = null;
	exports.y = null;
	exports.direction = null;
};

// Place Robot on axis
exports.place = function(x, y) {

	if (x <= surface.width() && y <= surface.height()) {
		exports.x = x;
		exports.y = y;
	} else {
		console.log("X can't be bigger than " + surface.width() + ". Y can't be  bigger than " + surface.height());
	}

};

// Make sure robot doesn't fall when performing a step 
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

// Change Robot's direction by moving directions index one step forward
exports.right = function() {
	var direction_length = exports.directions.length -1;

	if (exports.direction === exports.directions[direction_length]) {
		// Set direction when initial position is last index of {directions} array
		exports.direct(exports.directions[0]); 
	} else {
		for (var i = direction_length; i >= 0; i--) {
			if(exports.direction  === exports.directions[i]) {
				return exports.direct(exports.directions[i + 1]);
			}
		}
	}
};

// Change Robot's direction by moving {directions} index one step backwards
exports.left = function() {
	var direction_length = exports.directions.length - 1;

	if (exports.direction !== exports.directions[0]) {
		// Set direction when initial position is not first index of {directions} array
		for (var i = direction_length; i >= 0; i--) { 
			if(exports.direction  === exports.directions[i]) {
				 return exports.direct(exports.directions[i - 1]);
			}
		}
	 } else {
	 	exports.direct(exports.directions[direction_length]); 
	}
};

exports.report = function() {
	console.log("");
	console.log("My position: " + "x: "+ exports.x + " y: " + exports.y);
	console.log("I am facing " + exports.direction);
	console.log("");
};
