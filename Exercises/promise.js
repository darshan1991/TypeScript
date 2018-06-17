function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello World"); }, 1000);
    });
}
iReturnPromiseAfter1Second().then(function (result) {
    console.log("promise returned after time :" + result);
});
var promise = new Promise(function (resolve, reject) {
    resolve("Work done");
    reject("Can't load the file error");
}).then(function (result) {
    console.log("promise fullfilled then this is called with result: " + result);
})["catch"](function (err) {
    console.log("promise failed with result" + err);
});
