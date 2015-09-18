//Robot module
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
}

exports.place = function(x, y) {

	if (x <= surface.width() && y <= surface.height()) {
		exports.x = x;
		exports.y = y;
	}

}

exports.moveNorth = function() {
	if(exports.y !== surface.height()) {
		exports.y += _step;
	}
}
exports.moveEast = function() {
	if(exports.x !== surface.width()) {
		exports.x += _step;
	}
}
exports.moveSouth = function() {
	if(exports.y !== 0) {
		exports.y -= _step;
	}
}
exports.moveWest = function() {
	if(exports.x !== 0) {
		exports.x -= _step;
	}
}

