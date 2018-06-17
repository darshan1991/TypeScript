interface Vehicle {
    drive(): any;
}
class Car implements Vehicle {
    constructor(private wheels: number){}

    drive():
    void{
        console.log("The Car drives with " + this.wheels + " wheels");
    }
}
class Bicycle implements Vehicle {
    constructor(private wheels: number){}

    drive():
    void{
        console.log("The Bicycle drives with " + this.wheels + " wheels");
    }
}
var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();

// interface example and here class implemeting interface  