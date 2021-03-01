"use strict";

let animal = {
    eats: true,
    walk: function () {
        console.log("Walking...")
    }
};
let rabbit = {jump: false,};

let lion = {
    run: true,
    __proto__: animal
};

rabbit.__proto__ = animal;

rabbit.eats = false;
// console.log(rabbit.eats);

lion.walk();