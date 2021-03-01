"use strict";

function User(name, age) {
    this.name = name;
    this.age = age;
}

let user = new User('Charles', 21);

console.log(JSON.stringify(user));