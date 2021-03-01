"use strict";

let sum = (...args) => {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
};

let recursiveSum = (arg) => (arg.length === 0) ? 0 : arg[0] + recursiveSum(arg.slice(1), arg.length - 1);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(recursiveSum(array));