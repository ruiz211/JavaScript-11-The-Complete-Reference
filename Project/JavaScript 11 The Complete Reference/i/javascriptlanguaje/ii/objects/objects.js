"use strict";

let object = {};

let user = {
    name: 'John',
    age: 17,
    isAdmin: true,
    sayHi: function (name) {
        return `Hi! ${name}`;
    },
    "like birds": true,
};

console.log(user.name);
console.log(user.isAdmin);
console.log(user.sayHi("Charles"));
console.log(user["like birds"]);

console.log(JSON.stringify(user));

//also we can use for loop