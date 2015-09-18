var expect = require("chai").expect;

var robot = require("../lib/robot");
var table = require("../lib/surface");

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
    
    describe("#faced", function() {
        it("should return faced direction of robot as north", function(){
            var direction = robot.direction;
            expect(direction).to.equal("north");
        });
    });
    
    describe("#place()", function() {

        var x = 1;
        var y = 3
        var direction = "north";

        it("should place robot on position x:" + x + ", y:" + y + " and face " + direction + "", function() {
                     
            
            robot.place(x,y,direction);

            expect(robot.x).to.equal(x);
            expect(robot.y).to.equal(y);
            expect(robot.direction).to.equal(direction);
        });

        it("should not place robot out of surface boundaries", function() {
            var x = 15;
            var y = 15;
            var direction = "north";
            
            var cur_x_position = robot.x;
            var cur_y_position = robot.y;
            var cur_direction = robot.direction;
            
            robot.place(x,y,direction);

            // position should not change 
            expect(cur_x_position).to.equal(robot.x);
            expect(cur_y_position).to.equal(robot.y);
            expect(cur_direction).to.equal(robot.direction);
        }); 

    });


    describe("#move()", function() {

        it("shoud move robot one step north", function() {
            robot.place(0, 0, "north");
            var current_y = robot.y;
            robot.move();
            expect(robot.y).to.equal(current_y + 1);
        });

        it("shoud move robot one step west", function() {

            robot.place(5, 5, "north");
            var current_y = robot.y;
            robot.move();
            expect(robot.y).to.equal(current_y - 1);
        });

        it("shoud move robot one step north", function() {
            // Robot is facing north on 0:0
            var current_y = robot.y;
            robot.move();
            expect(robot.y).to.equal(current_y + 1);
        });

        it("shoud move robot one step north", function() {
            // Robot is facing north on 0:0
            var current_y = robot.y;
            robot.move();
            expect(robot.y).to.equal(current_y + 1);
        });
    });


});