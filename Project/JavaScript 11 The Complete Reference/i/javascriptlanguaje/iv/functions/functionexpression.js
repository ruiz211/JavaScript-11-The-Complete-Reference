"use strict";

let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};

sayHi(); // Hello, Guest