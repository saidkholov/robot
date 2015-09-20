// Help Module
// run when --help is called
// ============================================================

exports.showHelp = function(message) {
	console.log("	Robot app usage:");
	console.log("");
	console.log("	--place X,Y,position 	places robot at X and Y axis and directs it to {POSITION}");
	console.log("				HINT: all command before --place will be ignored.");
	console.log("	move			moves robot one step towards facing direction");
	console.log("	left			turs robot 90 degrees left. E.g. turns from North to West");
	console.log("	right			turs robot 90 degrees right. E.g. turns from North to East");
	console.log("	report			reports current position as X:Y and the direction it is facing to");
};