var expect = require("chai").expect;
var robot = require("../lib/robotFacade");

describe("RobotFacade", function(){
	describe("#onSurface()", function() {
		context("when on surface", function() {
			it("should return true", function() {
				robot.place([1, 2, "north"]);
				var is_on_surface = robot.onSurface();
				expect(is_on_surface).to.be.true;
			});
		});
		context("when not on surface", function() {
			it("should return false", function (){
				robot.reset();
				var is_on_surface = robot.onSurface();
				expect(is_on_surface).to.be.false;
			});
		});
	});
});