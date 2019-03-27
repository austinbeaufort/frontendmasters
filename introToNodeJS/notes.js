// NODE JS

// OPEN SOURCE RUNTIME
// BUILT ON CHROME'S V8 JS ENGINE

// CAN CREATE ANYTHING A SCRIPTING OR SERVER LANGUAGE LIKE PYTHON,
// OR RUBY CAN, BUT WITH JAVASCRIPT (COMES WITH TRADEOFFS SOMETIMES)

// TOOLING (BUILD, AUTOMATION, ETC)
// API'S (REST, REALTIME, ETC)
// CDNs
// SHAREABLE LIBRARIES
// DESKTOP APPLICATIONS
// INTERNET OF THINGS
// LOTS OF OTHER THINGS


// INSTALL NODE WITH NVM (NODE VERSION MANAGER)
// ALLOWS TO RUN MANY VERSIONS OF NODE WHENEVER

// INTERACTIVE REPL (PLAYGROUND ENVIRONMENT)
// just type in "node" command to the terminal and can, 
// begin writing JavaScript



// CLI (COMMAND LINE INTERFACE) EXECUTABLE (FOR EVERYTHING ELSE)
// Use to execute your node apps
// node path/to/your/file.js

// PRACTICE USING NODE CLI EXECUTABLE

// const firstName = 'Austin';
// const lastName = 'Beaufort';
// const mood = 'Happy';

// let sentence = `Hi I am ${firstName} ${lastName} and I am ${mood} today!`;
// console.log(sentence);

//FOR BROWSER..
// DON'T ATTACH THINGS TO THE WINDOW, SECURITY RISK.


// BROWSER VS. NODEJS

// BROWSER
// 1. build interactive apps for the web
// 2. DOM
// 3. Window
// 4. Fragmentation
// 5. Optional Modules
// 6. Cannot access filesystem
// 7. Async

// NODE JS
// 1. build server side apps and scripts
// 2. Nope, no Gui (can virtualize)
// 3. No window, but does have a global
// 4. Versioned, no fragmentation
// 5. Required Modules (commonjs +)
// 6. Can access filesystem
// 7. Async
// 7. No browser based API's



// GLOBALS
// Node gives helpful globals, but just like the browser, 
// you SHOULD NOT create your own.

// GLOBALS

// 1. process - has information about the environment the,
// program is running in.

// 2. require - function to find and use modules in a,
// current module.

// 3. __dirname - the current directory path

// 4. module - information about current module,
// methods or making module consumable.

// 5. global - like window, it's the 'global' object.
// Almost NEVER use this.

// ... many more



// WHAT ARE MODULES??
// CommonsJs
// packaged, "safe" code.
// Node Wraps the file in an IIFE for us.
// let module1 = (function(exports, require, module, __filename, __dirname) {

// })

// NodeJS uses commonJs for it's module system.

// Other module systems out there:
// ESM (ecmascript modules)
// AMD (pretty much out of date)
// others.. don't use the others




// CREATING MODULES

// ALL YOUR NODEJS CODE ARE MODULES
// REGULAR CODE, JUST EXPORT IT

// AS THE AUTHOR, YOU DECIDE HOW AND WHAT TO EXPOSE,
// FROM YOUR MODULES, TO OTHER MODULES.

// YOU DO THIS WITH THE "MODULE" GLOBAL OBJECT PROVIDED,
// TO YOU BY THE NODEJS RUNTIME.

// USE MODULE.EXPORTS

// IF EXPORTING MORE THAN ONE THING, ALWAYS EXPORT,
// THE THINGS AS AN OBJECT.

// CAN ONLY USE ONE MODULE.EXPORTS STATEMENT PER FILE.



// USING MODULES

// "require" global

// "require" takes a relative path to the module you want to use, and,
// sychronously loads it by returning whatever the target module exported.


