/*
 Console.trace logs the call stack trace.
*/

function f1() {
    console.trace("Where am I ?");
    /*
        Trace: Where am I ?
            at f1 (/Users/manoj/Projects/bootstraps/browser/console commands/console.trace.js:6:13)
            at f2 (/Users/manoj/Projects/bootstraps/browser/console commands/console.trace.js:10:5)
            at f3 (/Users/manoj/Projects/bootstraps/browser/console commands/console.trace.js:14:5)
            at Object.<anonymous> (/Users/manoj/Projects/bootstraps/browser/console commands/console.trace.js:17:1)
            at Module._compile (internal/modules/cjs/loader.js:1063:30)
            at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
            at Module.load (internal/modules/cjs/loader.js:928:32)
            at Function.Module._load (internal/modules/cjs/loader.js:769:14)
            at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
            at internal/main/run_main_module.js:17:47
    */
}

function f2(){
    f1();
}

function f3(){
    f2();
}

f3();


