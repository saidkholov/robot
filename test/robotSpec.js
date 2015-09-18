var expect = require("chai").expect;

var robot = require("../lib/robot");
var surface = require("../lib/surface");

describe("Robot", function() {
    
    describe("#x", function() {
        it("should return x position of robot as null", function(){
            var x = robot.x;
            expect(x).to.equal(null);
        });
    });
    
    describe("#y", function() {
        it("should return y position of robot as null", function(){
            var y = robot.y;
            expect(y).to.equal(null);
        });
    });
    
    describe("#direction", function() {
        it("should return faced direction of robot as null", function(){
            var direction = robot.direction;
            expect(direction).to.equal(null);
        });
    });
    
    describe("#place()", function() {

        var x = 1;
        var y = 3

        it("should place robot on position x:" + x + ", y:" + y, function() {
            robot.place(x,y);
            expect(robot.x).to.equal(x);
            expect(robot.y).to.equal(y);
        });

        it("should not place robot out of surface boundaries", function() {
            var x = 15;
            var y = 15;
            var direction = "north";
            
            var cur_x_position = robot.x;
            var cur_y_position = robot.y;
            var cur_direction = robot.direction;
            
            robot.place(x,y);

            // position should not change 
            expect(cur_x_position).to.equal(robot.x);
            expect(cur_y_position).to.equal(robot.y);
        }); 

    });
    
    describe("#direct()", function() {
        for (var i = robot.directions.length - 1; i >= 0; i--) {
            it("should direct the robot to " + robot.directions[i], function() {
                robot.direct(robot.directions[i]);
                expect(robot.direction).to.equal(robot.directions[i]);
            });
        };
    });

    describe("#moveNorth()", function() {
        it("shoud move robot one step North", function() {
            robot.place(0, 2);
            var current_y = robot.y;
            
            robot.moveNorth();
            expect(robot.y).to.equal(current_y + 1);
        });

        it("should not move", function() {
            robot.place(2, surface.height());
            var current_y = robot.y;
            
            robot.moveNorth();
            expect(robot.y).to.equal(current_y);
        });
    });

    describe("#moveEast()", function() {
        it("shoud move robot one step East", function() {
            robot.place(1, 2);
            var current_x = robot.x;

            robot.moveEast();
            expect(robot.x).to.equal(current_x + 1);
        });

        it("should not move", function() {
            robot.place(surface.width(), 0);
            var current_x = robot.x;

            robot.moveEast();
            expect(robot.x).to.equal(current_x);
        });

    });

    describe("#moveSouth()", function() {

        it("shoud move robot one step South" , function() {
            robot.place(1, 2);
            var current_y = robot.y;

            robot.moveSouth();
            expect(robot.y).to.equal(current_y - 1);
        });

        it("should not move", function() {
            robot.place(0, 0);
            var current_y = robot.y;

            robot.moveSouth();
            expect(robot.y).to.equal(current_y);
        });

    });

    describe("#moveWest()", function() {

        var direction = "west";
        it("shoud move robot one step " + direction, function() {
            robot.place(1, 2);
            var current_x = robot.x;

            robot.moveWest();
            expect(robot.x).to.equal(current_x - 1);
        });

        it("should not move", function() {
            robot.place(0, 3);
            var current_x = robot.x;

            robot.moveWest();
            expect(robot.x).to.equal(current_x);
        });

    });

});