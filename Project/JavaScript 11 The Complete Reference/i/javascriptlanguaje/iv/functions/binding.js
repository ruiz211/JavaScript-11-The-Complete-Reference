"use strict";

let user = {
    name: "John",
    sayHi() {
        console.log("Hi " + this.name)
    },
};

let binding = user.sayHi.bind(user);

setTimeout(binding, 1000);


let bindingName = () => console.log(`This is ${this.name}`);

let printName = bindingName.bind(user);
printName();

// setTimeout(printName, 2000);