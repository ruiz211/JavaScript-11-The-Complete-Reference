"use strict";

let person = {
    name: "Charles",
    surname: "...",
    get fullName() {
        return this.name + " " + this.surname
    },
    set fullName(newValue) {
        if (newValue.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        [this.name, this.surname] = newValue.split(" ")
    }
};

console.log(person.fullName);

person.fullName = "John Carpenter";
setTimeout(() => console.log(person.fullName), 1000);
