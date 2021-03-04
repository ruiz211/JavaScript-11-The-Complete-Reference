"use strict";

new Promise((resolve, reject) => {
    resolve(11);
    throw new Error("Whoops!");
}).then(value => console.log(value))
    .catch(reason => console.log(reason.message));

