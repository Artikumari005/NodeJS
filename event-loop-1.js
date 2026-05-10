const fs = require("fs");
const a =9000;
setImmediate(()=>{
    console.log("this is setImmediate");
});

fs.readFile("./file.txt", "utf-8",()=>{
    console.log("file reading is complete");
});

setTimeout(()=> console.log("timer is done"),0);

function printA(){
    console.log("a =",a);
}

printA();
console.log("js call stack is empty now");


