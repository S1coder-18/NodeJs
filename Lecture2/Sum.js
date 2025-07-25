// Module protect variables and functions from leaking 
console.log("Sum Module Executed");

var x = "Hello World";

function calculateSum(a, b){
    const sum  = a+b;
    console.log(sum);
}

//Single value or function exports
// module.exports = calculateSum;
//By using module.exports we can use the function's in ther modules

module.exports = {
    x,
    calculateSum,
}