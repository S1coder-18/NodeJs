
const crypto = require("node:crypto");

console.log("Hello world");

var a = 1000;
var b = 20000;

//This is blocking the main thread
// we should never use the synchronous function 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("Second key is generated");
});


function multiplication(a, b){
    const res = a*b;
    return res;
}

let c = multiplication(a, b);
console.log("The multiply is", c);