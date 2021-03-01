"use strict";

function sayHi(a) {
    console.log("hi");

    function sayBye() {
        console.log("bye");
    }
}

console.log(sayHi.name);
console.log(sayHi.length);
