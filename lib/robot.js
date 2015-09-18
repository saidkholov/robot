//Robot module
var table = require("./surface");


// Private
var _step = 1;




// Public
exports.x = null;
exports.y = null;
exports.direction = "north";

exports.place = function(x, y, direction) {

	if (x <= table.width() && y <= table.height()) {
		exports.x = x;
		exports.y = y;
		exports.direction = direction;
	}

}

exports.move = function() {
	switch(exports.direction){
		case "north":
			exports.y += 1;			
	}
	
}




