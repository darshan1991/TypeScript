class Person{
    constructor(private name:string){}
    getName(){
        return this.name;
    }
}
class Student extends Person{
     constructor(name:string, )
}
class Employee extends Person{
    constructor(name:string, private empid:number)
    {
        super(name);
    }
    getEmpid():number {
        return this.empid;
    }
}
{
    firstPerson: T;
    secondPerson: S;
    constructor(f:T, s:S)
    {
this.firstPerson = f;
this.secondPerson = s;
    }
}
var p1:Person = new Person("Amit");
var p2:Person = new Person("Barath");

var s1:Student = new Student("Ashok", 101);
var e2:Employee = new Employee("Chethan", e101);

var pr1: Pair<Person, Person> = new Pair(p1,p2);
var pr2: Pair<String, Person> = new Pair("Arya", 2);




class Pair<T, S>
{
    first: T;
    second: S;
    constructor(first:T, second:S){
        this.first = first;
        this.second =  second;
    }
}
var p: Pair<string, string> = new Pair("Darshan", "HN");
var p2: Pair<string, number> = new Pair("Barath", 5);

console.log(p, p2);