var randArray = [5, 6, 7, 8];
for (var _i = 0, randArray_1 = randArray; _i < randArray_1.length; _i++) {
    var val = randArray_1[_i];
    console.log(val);
}
for (var val1 in randArray) {
    console.log(val1);
}
var strArray = randArray.map(String);
for (var _a = 0, strArray_1 = strArray; _a < strArray_1.length; _a++) {
    var val1 = strArray_1[_a];
    console.log(val1);
}
