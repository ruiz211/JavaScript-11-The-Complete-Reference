"use strict";

let promise = new Promise((resolve, reject) => setTimeout(() => resolve("Done"), 1000));
promise.then(value, error => console.log(value.toString()));
promise.catch(reason => console.log(reason.message));


