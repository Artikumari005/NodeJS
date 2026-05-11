const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE=2;

crypto.pbkdf2("password", "salt", 10000, 34, "sha512", (err , key)=>{
    console.log("1 crypto done");
});

crypto.pbkdf2("password", "salt", 30000, 34, "sha512", (err , key)=>{
    console.log("2crypto done");
});
crypto.pbkdf2("password", "salt", 20000, 34, "sha512", (err , key)=>{
    console.log("3crypto done");
});
crypto.pbkdf2("password", "salt", 50000, 34, "sha512", (err , key)=>{
    console.log("4crypto done");
});
crypto.pbkdf2("password", "salt", 70000, 34, "sha512", (err , key)=>{
    console.log("5crypto done");
});

//fs.readFileSync("./file.txt","utf-8", ()=>{
//    console.log("file isreading");
//});


