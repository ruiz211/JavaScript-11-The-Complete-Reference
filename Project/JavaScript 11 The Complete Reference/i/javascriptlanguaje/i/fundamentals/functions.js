"use strict";

let name = "John";

function greet() {
    name = "Charles";
    return "Hi " + name;
}

console.log(name);
console.log(greet());