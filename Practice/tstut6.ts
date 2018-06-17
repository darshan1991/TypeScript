var getSum = function(n1: number, n2: number):
number{
    return n1 + n2;
}

var theSum: number = getSum(3, 6);

console.log("6 + 3 = " + theSum);

// normal function program with parameters

var getMul = function(m1: number, m2 = 20, m3 ?: number):
number{
    if(typeof m3 != 'undefined'){
    return m1 * m2 * m3;
}
return m1 * m2
}
console.log("10 * 20 = " + getMul(10));
console.log("10 * 20 * 30 = " + getMul(10, 20, 30));

// Assigning values and required parameter in the function