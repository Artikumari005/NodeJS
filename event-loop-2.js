const fs = require("fs");
const a =9000;
setImmediate(()=>{
    console.log("this is setImmediate");
});

Promise.resolve().then(()=>console.log("promise"));

fs.readFile("./file.txt", "utf-8",()=>{
    console.log("file reading is complete");
});

setTimeout(()=> console.log("timer is done"),0);
process.nextTick(()=> console.log("process nextTick is done"));
process.nextTick(()=> console.log("process second nextTick is done"));

function printA(){
    console.log("a =",a);
}

printA();
console.log("js call stack is empty now");


//a=100
//last line...
//process.nextTick
//promise
//setTimeout
//setImmediate 