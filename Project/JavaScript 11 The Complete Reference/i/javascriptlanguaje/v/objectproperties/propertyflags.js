"use strict";

let user = {name: "John"};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor));


Object.defineProperty(user, 'name', {writable: true, configurable: true, enumerable: false});
descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor));
