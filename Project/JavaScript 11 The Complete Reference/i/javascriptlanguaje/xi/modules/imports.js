"use strict";

import User, {sayHi as hi} from './exports.js';
// import * as ex from './exports.js';

let user = new User("John");
console.log(user.name);

console.log(hi("Charles"));