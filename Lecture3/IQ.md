## ✅ What happens when we require() a module in Node.js?
When we use require('module-name'), Node.js does the following:

1. It wraps the module code inside an IIFE (Immediately Invoked Function Expression).
2. This IIFE makes variables and functions inside the module private and scoped locally to that module.
3. This design prevents global namespace pollution and keeps modules encapsulated.

## 🔒 How are variables and functions private inside modules?
All module code is automatically wrapped by Node.js inside this IIFE:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Your module code here
});
```
This function scope ensures that any variables or functions declared are not accessible globally — they're local to the module.

## 📦 Where does module.exports come from?
Node.js injects module and its exports property into the IIFE. This allows the module to expose functionality to other modules.

Example:
```javascript

(function (module, require) {
    require("path");
    console.log("I am Sachin");
})(module = { exports: {} });
```
When the module finishes executing, module.exports contains whatever was exported from that file.

## 🔁 What is the 5-step mechanism of require() in Node.js?
Resolving
Determines the file path or module location.
1. Tries in this order:
   Relative/local path (e.g., ./file.js)
   JSON file (e.g., ./data.json)
   Node modules (node_modules directory)

2. Loading
   The module file is read from the file system.

3. Wrapping
   Node wraps the code in a function (IIFE) to give it local scope.

4. Evaluation
   The module is executed, and module.exports is populated.

5. Caching
   The result is cached.
   If the same module is required again, the cached version is returned to improve performance.

## What is require() in Node.js and what does it do?
require() is a built-in Node.js function used to import modules, JSON, or local files into your current file. It loads the module, executes it, and returns the module.exports object so you can use it in your code.

## How does Node.js make variables inside a module private?
Node.js wraps every module in a special function called an Immediately Invoked Function Expression (IIFE):
```javascript

(function(exports, require, module, __filename, __dirname) {
  // Module code here
});

```
This wrapper function creates a private scope for variables and functions, preventing them from polluting the global namespace. Only what you explicitly export becomes available outside.

## Explain the purpose of the IIFE in module loading.
The IIFE:

1. Encapsulates the module code in its own scope
2. Provides special variables like require, module, exports
3. Prevents variables from leaking into the global scope
4. Makes modules isolated and reusable

## What are the parameters passed to the module wrapper function in Node.js?
The wrapper function receives:
1. exports: a shortcut to module.exports
2. require: to import other modules
3. module: an object representing the current module
4. __filename: the absolute path of the current module file
5. __dirname: the directory name of the current module

## What is module.exports and how is it different from exports?
module.exports is the actual object that gets returned when a module is required.
exports is just a shortcut to module.exports.
If you reassign exports = somethingElse, it won't affect module.exports. Always assign to module.exports when exporting something custom like a function or class.
```javascript

module.exports = function() {}; // ✅ Works
exports = function() {};        // ❌ Won’t be exported
```
## What happens when you require() the same module multiple times?
Node.js caches the module after the first require. On subsequent requires, it returns the cached version, improving performance and consistency.

## What is module caching in Node.js and why is it important?
Caching avoids re-loading and re-evaluating the same module multiple times. It’s useful for:
Performance
Sharing single instances (e.g., DB connections, configuration)
To clear cache manually:

```javascript
delete require.cache[require.resolve('./module')]

```
##  What is the role of __dirname and __filename?
__dirname: The directory path of the current module
__filename: The full file path of the current module

Example:
```javascript
console.log(__dirname);  // /Users/sachin/project
console.log(__filename); // /Users/sachin/project/index.js
```

## Where does the module object come from, and how is it constructed?
Node.js creates a Module instance internally when a file is required. The module system comes from lib/module.js, and each file has its own module object.

## How to expose only specific parts of a module?

// math.js
```javascript
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }

module.exports = { add };
``` 
// Only exporting add

## How would you debug if require() is not finding a module?
Use 
```javascript
console.log(require.resolve('module-name'))
``` 
to see the resolution path.
Check node_modules and file paths.
Verify file extensions.
Use try/catch to log errors.

## What happens if you overwrite module.exports with a value other than an object?
That value (function, string, etc.) becomes the default export:

```javascript

module.exports = "Hello";
// Now require('file') === "Hello"
```

