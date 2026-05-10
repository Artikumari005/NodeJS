const fs= require("fs");
setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("setTimeout"),0);

Promise.resolve().then(()=> console.log("promise"));

fs.readFile("./file.text", "utf-8",()=>{
   setTimeout(()=>console.log(" second setTimeout"),0);

   process.nextTick(()=> console.log("second next tick"));

   setImmediate(()=>console.log("second setImmediate"));
   console.log("file reading is done");
});
  process.nextTick(()=> console.log("next tick"));

console.log("last line of file");




//last line of file
//next tick
//promise
//setTimeout
//file reading is done
//second next tick
//setImmediate
//second setImmediate
// second setTimeout