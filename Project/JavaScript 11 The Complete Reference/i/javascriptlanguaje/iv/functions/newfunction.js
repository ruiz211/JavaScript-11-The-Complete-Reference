"use strict";

let func = new Function('a', '...b', 'return a');

console.log(func(2, 3, 4, 5, 6, 7, 8, 9));