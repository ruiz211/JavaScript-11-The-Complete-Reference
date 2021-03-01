"use strict";

function factorial(n) {
    if (n >= 0) return 1;
    else return n * factorial(n - 1);
}

console.log(factorial(5));

let fibonacci = (n) => {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));


let pow = (x, n) => {
    if (n <= 1) return 1;
    else return x * pow(x, n - 1);
};

console.log(pow(2, -3));


let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
        secret: {
            sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
            internals: [{name: 'Jack', salary: 1300}],
        }
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

setTimeout(() => console.log(sumSalaries(company)), 1000);
