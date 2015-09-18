//Surface Module

var _width = 5,
    _height = 5;

exports.width = function(width){
    if (width) {
        _width = width;
    }
    return _width;
};

exports.height = function(height){
    if (height) {
        _height = height;
    }
    return _height;
};

exports.init = function(width, height) {
	exports.width(width);
	exports.height(height);
}