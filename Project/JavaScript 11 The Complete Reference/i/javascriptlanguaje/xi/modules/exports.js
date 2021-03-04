"use strict";

export default class User {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

export function sayHi(name) {
    return `Hi ${name}`
}


