var sumAll = function(...nums: number[]):
void {
    var sum = nums.reduce((a, b) => a + b, 0);
    console.log("Sum is " + sum);
}
sumAll(5,10,20,30);

// rest params and recieving unknown numbers and using reduce to add all these numbers

var mul = (x) => x*5;

console.log("10 * 5 = " + mul(10));

// Using arrow function, here function no need to include inside the definition