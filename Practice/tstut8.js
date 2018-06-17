var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.setName = function (name) { this.name = name; };
    Person.prototype.getAddres = function () { return this.address; };
    Person.prototype.setAddress = function (address) { this.address = address; };
    Person.prototype.getDetails = function () {
        return this.name + "from" + this.address;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, address, eid, designation) {
        var _this = _super.call(this, name, address) || this;
        _this.eid = eid;
        _this.designation = designation;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        return this.name + ":" + this.address + ":" + this.eid + ":" + this.designation;
    };
    return Employee;
}(Person));
// var p:Person = new Person("Darshan", "Tumakuru");
// var p1:Person = new Person("Sunil", "Gadag");
// var p2:Person = new Person("Basavaraj", "Gadag");
var e1 = new Employee("Dinesh", "Chandigarh", 404, "Trainer");
console.log("name of employee: " + e1.getName());
console.log(e1.getDetails());
console.log(e1);
// console.log(p);
// console.log(p1);
// console.log(p2);
