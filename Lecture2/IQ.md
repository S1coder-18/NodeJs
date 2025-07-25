## - To export single value we use 
   module.exports = value or function or obj etc.

## - To export multiple value we wrap inside an object 
  
  module.exports = {
    x : x,
    calculateSum : calculateSum,
  }

This is the short - hand -->
  module.exports = {
    x ,
    calculateSum,
  }

- ## And in the module where we want to use these variable or function we import it...
  by using require.

  const obj = require('path');

- ## Any other way to import and export module?
  Yes, There is another way which we can use for this and that is ES Modules -->
  For using this we have to write in package.json 

  {
    type: "module"
  }

## - Difference between commonJs and ES modules ?

1. CommonJs modules are by default used by the nodeJs whereas
   Es module we have to configure it.
2. CommonJs syntax -->
    To export -->    module.exports = {values} // that we wanna export
    To import -->    require('path'); //path of module

    In ES Modules -->

    To export -->    export default {function, variable,obj, etc} // that we wanna export
    To import -->    import {whatever we wanna import } from 'path'; //path of module

3. CommonJs is older way of doing this. (used in industry).
   ES-Modules is a newer way of doing this.

4. In CommonJs, When we require then it works in synchronous ways,
   the next line of code won't be executed until require will resolved.
   Whereas 
   In ES-Modules, It works in Asynchronous way.

5. In CommonJs, Code runs in non-strict mode.
   In ES-Modules, code runs in strict mode.


## Can you mix CommonJS and ES Modules in one project? What problems might arise?

An ES Module can import a CommonJS module using import x from 'module' — but only the default export works.
A CommonJS module can import an ES Module using dynamic import() (async only) — require() won’t work.

Named exports from CommonJS aren't directly accessible from ESM.
Mixing import/export syntax causes confusing bugs.
Debugging and tooling (e.g., TypeScript, Webpack) may behave inconsistently.

## Can require() be used in an ES Module?
❌ No, it throws an error:
ReferenceError: require is not defined in ES module scope

import fs from 'fs';

## What is the actually module.exports is?
It's an empty object.
So,We can write like this as well.

**module.exports.x = x;
module.exports.calculateSum = calculateSum;**