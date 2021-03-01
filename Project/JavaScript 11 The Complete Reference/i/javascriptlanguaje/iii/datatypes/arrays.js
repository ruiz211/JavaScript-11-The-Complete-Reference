"use strict";

let names = ["John", "Charles", "Eve", "Joseph"];

names.forEach((value, index, array) => console.log(`In position ${index} is the value ${value}`));

names.shift();
console.log(names);
names.push("Other name");
console.log(names);
names.unshift("Doug");
console.log(names);
names.pop();
console.log(names);

console.log(names.filter(value => value.startsWith("J")));
console.log(names.sort().reverse());