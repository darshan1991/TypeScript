var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    console.log("Sum is " + sum);
};
sumAll(5, 10, 20, 30);
// rest params and recieving unknown numbers
var mul = function (x) { return x * 5; };
console.log("10 * 5 = " + mul(10));
