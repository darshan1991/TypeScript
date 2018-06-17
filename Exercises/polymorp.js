"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        console.log("area() from rectangle");
        return this.length * this.width;
    };
    Rectangle.prototype.draw = function () {
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        console.log("area() from circle");
        return 22.0 / 7 * this.radius * this.radius;
    };
    return Circle;
}());
function getTotalArea(figures) {
    var s = 0.0, i;
    for (i in figures) {
        s = s + figures[i].area();
    }
    return s;
}
var figures = [new Rectangle(4, 5), new Circle(7), new Rectangle(4, 5)];
console.log(getTotalArea(figures));
