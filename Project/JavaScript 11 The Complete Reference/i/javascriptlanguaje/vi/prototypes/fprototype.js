"use strict";

let animal = {eats: true};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("Charles");
console.log(rabbit.eats);