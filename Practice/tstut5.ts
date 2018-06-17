var randArray = [5, 6, 7, 8];

for(var val of randArray){
    console.log(val);
}

for(var val1 in randArray){
    console.log(val1);
}

var strArray = randArray.map(String);

for(var val1 of strArray){
    console.log(val1);
}

//loop function and convertion of number array into string array