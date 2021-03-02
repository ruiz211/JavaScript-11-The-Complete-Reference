"use strict";

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    _name = "";

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    _age = 0;

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    description() {
        return `Person name: ${this._name} and has ${this._age} years old`;
    }
}

console.log(Person.toString());
let john = new Person("John", 31);
console.log(john.description());
console.log(Person == Person.prototype.constructor);

