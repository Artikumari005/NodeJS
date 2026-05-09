
var a = 234;
var b=987654;


//asynchronous function 
//This callback will only be pushed to callstack in v8 if the call stack is empty
setTimeout(()=>{
    console.log("call me right now  ");
}, 0);



function multiply(x,y){
    const result = a*b;
    console.log("multiplication is :", result);
}

var c = multiply(a,b);
console.log("multiplication result  :",c);