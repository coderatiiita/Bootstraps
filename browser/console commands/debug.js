/*
    The console.debug() method outputs a message to the web console at the "debug" log level.
    The message is only displayed to the user if the console is configured to display debug 
    output. 

    Identical to console.log(object [, object, ...]) except different log level.

    In most cases, the log level is configured within the console UI. 
    This log level might correspond to the `Debug` or `Verbose` log level.
*/

const obj1 = {
  key1: "value1"
}

const obj2 = {
    key2: "value2"
}

console.debug(obj1 ,obj2 );
