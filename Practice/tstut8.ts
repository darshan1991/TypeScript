class Person
{
   name : string;
   address : string;
   constructor(name: string, address: string)
    {
        this.name  = name;
        this.address = address;
    }
   getName():string { return this.name;}
   setName(name:string) {this.name=name;}

   getAddres():string { return this.address;}
   setAddress(address:string) {this.address=address}

    getDetails()
    {
        return this.name + "from" + this.address; 
    }
}
class Employee extends Person
{
    eid:number;
    designation:string;
    constructor(name:string, address:string, eid:number, designation:string)
    {
    super(name, address);
    this.eid=eid;
    this.designation=designation;
    }
    getDetails(){
        return this.name+":"+this.address+":"+this.eid+":"+this.designation;
    }
}
// var p:Person = new Person("Darshan", "Tumakuru");
// var p1:Person = new Person("Sunil", "Gadag");
// var p2:Person = new Person("Basavaraj", "Gadag");


var e1 : Employee = new Employee("Dinesh", "Chandigarh", 404, "Trainer");
console.log("name of employee: " + e1.getName());

console.log(e1.getDetails());
console.log(e1);

// console.log(p);
// console.log(p1);
// console.log(p2);