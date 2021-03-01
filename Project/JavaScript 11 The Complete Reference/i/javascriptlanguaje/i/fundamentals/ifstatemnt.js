"use strict";

let year = new Date();
if (year.getFullYear() === 2020) {
    console.log(`Welcome ${year.getFullYear()}!`)
}

let bool = year.getFullYear() >= 2020;
console.log(bool);

let age = 11;
let message = (age < 3) ? 'Hi, baby!' : ((age < 18) ? 'Hello!' : ((age < 100) ? 'Greetings!' : 'What an unusual age!'));
console.log(message);

