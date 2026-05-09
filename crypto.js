const crypto = require("crypto");

console.log("crypto module");

var a =2345;
var b= 98765;

//sync function - blocking the main thread
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
console.log("key generated");

crypto.pbkdf2("password", "salt", 100000, 64, "sha512",(err, key)=>{
    console.log("async key generated");

});

function multiply(x , y){
    const result = a*b;
    return result;
}

var c = multiply(a,b);
console.log("multiplication is :", c);
