//modules are protects their variables and functions from the leakage by default
console.log("sum module");
 function addNum(a, b) {
    const sum =a + b;
    console.log(sum);
}

module.exports = {addNum};