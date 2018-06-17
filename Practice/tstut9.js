var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("The Car drives with " + this.wheels + " wheels");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        console.log("The Bicycle drives with " + this.wheels + " wheels");
    };
    return Bicycle;
}());
var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();
// interface example and here class implemeting interface  
