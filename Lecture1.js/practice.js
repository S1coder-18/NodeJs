var name = "Namaste NodeJs";

var a = 10;
 
console.log(name);
console.log(a);

console.log(global); // provided by nodeJs
console.log(globalThis); // provided by nodeJs

console.log(global === globalThis);

console.log(this); // This is not same as global 
console.log(this === globalThis); // false

function test() {
  console.log(this);
}
test(); // object because, It is working in non-strict mode, it will give global object 
