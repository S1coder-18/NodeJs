
const fs = require("fs");
const https = require("https");

console.log("Hello World!.");


var a = 108696;
var b = 20987;

//offloaded to livub
https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetched Data Successfully");
});
//offloaded to livub
setTimeout(()=>{
    console.log("SetTimeout called after 5 seconds")
}, 5000);
//offloaded to livub
fs.readFile("./text.txt", "utf8", (err, data)=>{
    console.log("File data", data);
});

function multiply(a, b){
    const res = a*b;
    return res;
}

const c = multiply(a, b);

console.log("The result of multiplication is",c);

//Execution order is 
/**
 * when file runs GEC is created and pushed into the callstack 
 * memory assign to fs, https , a, b, function multiply 
 * now execution phase
 * 1. Hello world
 * 2. when multiply comes execution context is created and pushed into callstack and then assigns memory to 
 * res and then executes it it calculate the a*b and returned from function c stored it and we log the console
 * 3. The result of multiplication is 67896789
 * 4. fs.readFile will be executed as v8 engine has to find it inside program file
 * 5.https get request executed first 
 * 6. after five second this setTimeout executed 
 */