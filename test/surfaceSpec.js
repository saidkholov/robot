//Surface module test

var expect = require("chai").expect;
var surface = require("../lib/surface");


describe("Surface", function(){
    describe("#width()", function(){
        it("should return default width as 5", function() {
            var width = surface.width();
            expect(width).to.equal(5);    
        });
        it("should set/get width of surface", function() {
            var width = surface.width(10);
            expect(width).to.equal(10);    
        });
    });
    describe("#height()", function() {
        it("should get default height of surface as 5", function() {
            var height = surface.height();
            expect(height).to.equal(5); 
        });
        it("should set/get height of surface", function() {
            var height = surface.height(5);
            expect(height).to.equal(5); 
        });
    });


    describe("#init()", function() {
        var height = 10;
        var width = 10;

        it("should init " + width + " by " + height + " surface", function() {
            surface.init(width, height);
            expect(surface.width()).to.equal(width); 
            expect(surface.height()).to.equal(height); 
        });
    });
});