"use strict";

let single = 'this is a string';

let double = "this is a string";

let back = `this is a string`;

console.log(single === double && double === back);

console.log(single.indexOf("i", 6));

if (~"is".indexOf("is")) console.log("Found");