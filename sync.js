console.log("synchronous code");

var a = 12345;
var b =23456;

function multiplyFn (x,y){
    const result = a*b;
    return result;

}

var c = multiplyFn(a,b);
console.log("Multiplication is :" ,c);