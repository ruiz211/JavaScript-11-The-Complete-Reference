"use strict";

async function f() {
    let result = new Promise(resolve => resolve(10));
    return await result;
}

f().then(value => console.log(value));

export {f as f}