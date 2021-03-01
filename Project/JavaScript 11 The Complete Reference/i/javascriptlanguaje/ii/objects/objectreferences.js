"use strict";

let user = {
    name: 'John',
    age: 17,
    isAdmin: true,
    sayHi: function (name) {
        return `Hi! ${name}`;
    },
    "like birds": true,
};


let clone = Object.assign({}, user);
clone.age++;

for (let key in clone) console.log(clone[key]);