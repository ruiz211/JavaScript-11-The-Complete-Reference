"use strict";

//while
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}

//do-while
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

//for
i = 0;
for (; i < 3;) {
    console.log(i++);
}