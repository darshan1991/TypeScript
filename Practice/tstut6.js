var getSum = function (n1, n2) {
    return n1 + n2;
};
var theSum = getSum(3, 6);
console.log("6 + 3 = " + theSum);
// normal function program with parameters
var getMul = function (m1, m2, m3) {
    if (m2 === void 0) { m2 = 20; }
    if (typeof m3 != 'undefined') {
        return m1 * m2 * m3;
    }
    return m1 * m2;
};
console.log("10 * 20 = " + getMul(10));
console.log("10 * 20 * 30 = " + getMul(10, 20, 30));
