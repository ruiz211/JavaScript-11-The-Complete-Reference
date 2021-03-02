"use strict";

class Access {
    publicProperty = "Public";
    _protectedProperty = "Protected";
    #privateProperty = "Private";
}

let a = new Access();
console.log(a.publicProperty);
console.log(a._protectedProperty);
// console.log(a.#privateProperty); //no access