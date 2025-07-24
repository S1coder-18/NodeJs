- ## Q1: What is the global object in Node.js?

In Node.js, global is the global object, similar to window in the browser. It holds globally available objects like console, setTimeout, etc. Any variable declared without let, const, or var becomes a property of global.

- ##  Q2: What is globalThis?

globalThis is a standard way introduced in ES2020 to access the global object in any environment.

In browsers, globalThis === window
In Node.js, globalThis === global

- ## Q3: Are global and globalThis the same in Node.js?
Yes, in Node.js, global and globalThis refer to the same object. So global === globalThis evaluates to true.

- ## Q5: You're debugging a Node.js module and notice that this is {}, but you expected global variables. Why is that?
In Node.js, each file is treated as a module. So this inside a module doesn’t refer to the global object but to module.exports. That's why this is {} and doesn't have global variables.

- ## Q6: How is this in the global scope different in the browser vs Node.js?
~~In the browser, this in global scope refers to window.
In Node.js, this refers to module.exports, not global.~~

- ## Q7: In Node.js, what will the following log?
function test() {
  console.log(this);
}
test();

In non-strict mode, this inside a regular function refers to the global object. So it will log the global object.
If strict mode is enabled ('use strict'), then this will be undefined.

## Q8: When would you use globalThis over global?
I would use globalThis when writing code that should run across both browser and Node.js environments. It's a cross-platform way to access the global object, unlike window or global, which are environment-specific.

## Q9: What’s a common mistake developers make when using this in Node.js modules?
Assuming this refers to the global object — but actually in Node.js modules, this points to module.exports. This can lead to bugs if global context is incorrectly assumed.

## Q10: In one line, summarize the relationship between this, global, and globalThis in Node.js.

In Node.js modules:
- this refers to module.exports,(Inside function it refer's to the global object.)
- global is the global object, and
- globalThis is a standardized alias for global. 
- In window globalThis, is also refer's to global object.

## Q11: Why is this not equal to globalThis in Node.js modules?
A: Because inside a module, this refers to module.exports, not the global object. This is a design decision by Node.js to promote encapsulation and modularity.

🔹 Behavior Inside Functions
## Q12: What does this refer to inside a function in Node.js?
function test() {
  console.log(this);
}
test();

In non-strict mode, this inside a function refers to the global object, i.e., global. In strict mode ('use strict';), this will be undefined.

## Q13: Can you explain the difference between this in Node.js vs the browser?

Context	Browser (this)	Node.js (this)
Global Scope	window	module.exports
Function (non-strict)	window	global
Function (strict)	undefined	undefined

## Q14: Why was globalThis introduced?
To provide a consistent way to refer to the global object across environments (Node.js, browsers, Web Workers, etc.), since window, self, and global vary by context.

