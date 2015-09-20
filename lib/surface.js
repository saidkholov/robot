// Surface Module
// Provides a surface for the robot to be put on
//  ====================================================

// Set Surface dimentions as private propeties 
var _width = 5,
    _height = 5;

// Set/Get width
exports.width = function(width){
    if (width) {
        _width = width;
    }
    return _width;
};

// Set/Get height
exports.height = function(height){
    if (height) {
        _height = height;
    }
    return _height;
};

// Initialize new surface with custom dimentions
exports.init = function(width, height) {
	exports.width(width);
	exports.height(height);
}