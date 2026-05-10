const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("setTimeout"), 0);
Promise.resolve().then(()=>console.log("promise"));

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading");
});
process.nextTick(()=> {
    process.nextTick(()=>console.log("inner next tick"));
    console.log("next tick");

    setTimeout(()=>console.log("hello set time out"),0);
});

console.log("last line");

// Output:
// last line
// next tick
// inner next tick
// promise
// setTimeout
// setImmediate
//file reading