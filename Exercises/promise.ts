function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve)  => {
        setTimeout(() => resolve("Hello World"), 1000);
    });
}

iReturnPromiseAfter1Second().then((result) => {
    console.log("promise returned after time :" + result)
});

const promise = new Promise((resolve, reject) =>{
    resolve("Work done");
    reject("Can't load the file error");
}).then((result) => {
    console.log("promise fullfilled then this is called with result: " +result);
}).catch((err) => {
    console.log("promise failed with result" +err);
});
