"use strict";

class ValidationError extends Error {

    constructor(message) {
        super();
        this.message = message;
        this.name = "Validation Error";
    }
}


function test(number) {
    try {
        if (number <= 0) throw new ValidationError("Negative number");
        console.log(Math.pow(number, 3))
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

test(7);
test(-5);