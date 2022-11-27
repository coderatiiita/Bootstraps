function EventEmitter() {
  let listeners = {};
  let oneTimeListeners = {};

  // Reusable functions
  function offFn(listenersList, eventName) {
    delete listenersList[eventName];
  }

  return {
    listenersCount: (eventName) => listeners[eventName].length,
    rawListeners: (eventName) => listeners[eventName],
    on: (eventName, callback) => {
      if (Array.isArray(listeners[eventName])) {
        // Event exists
        listeners[eventName].push(callback);
      } else {
        // Event doent exist
        listeners[eventName] = [callback];
      }
    },
    emit: (eventName, ...args) => {
      if (listeners[eventName]) {
        listeners[eventName].forEach((callback) => {
          callback(...args);
        });
      }

      if (oneTimeListeners[eventName]) {
        oneTimeListeners[eventName].forEach((callback) => {
          callback(...args);
        });
        offFn(oneTimeListeners, eventName);
      }
    },
    once: (eventName, callback) => {
      if (Array.isArray(oneTimeListeners[eventName])) {
        // Event exists
        oneTimeListeners[eventName].push(callback);
      } else {
        // Event doent exist
        oneTimeListeners[eventName] = [callback];
      }
    },
    off: (eventName) => {
      offFn(listeners, eventName);
    },
  };
}


// Test
let emitter = new EventEmitter();

function callback1(name, message) {
  console.log(`callback 1 - ${name} called with message - ${message}`);
}
function callback2(name, message) {
  console.log(`callback 2 - ${name} called with message - ${message}`);
}
function callback3() {
  console.log(`callback 3 called`);
}

emitter.on("on-load", callback1);
emitter.on("on-load", callback2);
emitter.once("on-click", callback3);

// Emitting with multiple parametered callbacks
emitter.emit("on-load", "cbName", "Hello");
emitter.emit("on-load", "cbName", "Hello");

emitter.emit("on-click"); // callback 3 called
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens
emitter.emit("on-click"); // Nothing happens

// Unsubscribing the event
emitter.off("on-load");

emitter.emit("on-load", "cbName", "Hello");


// Test
let emitter = new EventEmitter();

function callback(name, message) {
  console.log(`callback 1 - ${name} called with message - ${message}`);
}

emitter.on("on-load", callback);
emitter.emit("on-load", "cbName", "Hello");

// Output
// callback 1 - cbname called with message - Hello
