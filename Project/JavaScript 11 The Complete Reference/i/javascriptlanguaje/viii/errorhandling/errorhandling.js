"use strict";

let json = '{ "age": 30 }'; //incomplete data

try {

    let user = JSON.parse(json); //no errors


    try {
        if (!user.name) throw new Error("Undefined error");
        console.log(user.name);
    } catch (e) {
        console.log("Error " + e.message)
    }


    console.log(user);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); //(*)
    }
    console.log("Continue");//no

    console.log(user.name);//

} catch (e) {
    console.log("JSON Error: " + e.message); //JSON Error: Incomplete data: no name
}