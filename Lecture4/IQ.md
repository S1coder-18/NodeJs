- ## What is a Thread?
A thread is the smallest unit of execution within a process.
Every process (like your browser or a Node.js app) can have one or more threads.
A single-threaded application has one execution path, so it can only do one thing at a time.
A multi-threaded application can run multiple tasks concurrently within the same process.

JavaScript (especially in the browser and Node.js) is:

✅ Single-threaded by design
🧠 It runs on a single thread using a single call stack
But... it can still handle asynchronous tasks using:
Event Loop
Callback Queue
Web APIs (browser) or libuv (Node.js)
So JavaScript appears non-blocking and fast — even though it uses a single thread!

Js --> synchronous 
NodeJs --> Asynchronous  

## Execution Order – Structured Explanation
##  1. Global Execution Context (GEC) Creation
JS engine parses the file top-to-bottom.
In the Memory Phase:
Variables a, b, c, fs, https, and function multiply are hoisted.
GEC is pushed to the Call Stack.
##  2. Execution Phase (Synchronous Code)
Executed line by line:
console.log("Hello World!") → Output immediately.
var a = 108696, var b = 20987 → Values assigned.
https.get(...)
Recognized as async (network I/O)
Offloaded to libuv
setTimeout(...)
Recognized as async
Registered with libuv timers module with 5000ms delay

fs.readFile(...)

Recognized as async (file system operation)

Offloaded to libuv thread pool

multiply(a, b)

Function execution context is created.

res = a * b calculated.

Returned and stored in variable c.

console.log("The result of multiplication is", c)

Executes immediately.

## 🔸 3. Async Operations Handled by libuv
Meanwhile, the following are running in the background (non-blocking):

fs.readFile → in thread pool

https.get → registered in OS-level network queue

setTimeout → timer starts ticking (5s)

## 🔸 4. Call Stack Becomes Empty
Now the Event Loop starts managing the async callbacks.

## 🔸 5. Event Loop Phase Execution
Let’s break this into ordered phases:

Phase	What Happens
Next Tick Queue	No process.nextTick() used → skipped
Microtask Queue	No Promises used → skipped
Timers Phase	Timer hasn't expired yet → skipped
Poll Phase	Waits for I/O to complete. fs.readFile likely completes here
→ Callback queued and executed → logs file content
Check Phase	No setImmediate() used → skipped
Close Callbacks	Not applicable

