const fs = require("fs");

var a = 234;
var b=987654;


//asynchronous function
setTimeout(()=>{
    console.log("after 5 seconds ");
}, 5000);


//asynchronous function
fs.readFile("./file.txt", "utf8", (err,data)=>{
    console.log("file data  :", data);
});

function multiply(x,y){
    const result = a*b;
    console.log("multiplication is :", result);
}

var c = multiply(a,b);
console.log("multiplication result  :",c);