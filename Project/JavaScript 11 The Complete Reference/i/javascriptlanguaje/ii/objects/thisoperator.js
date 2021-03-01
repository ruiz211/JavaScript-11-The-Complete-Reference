let user = {
    name: "John",
    sayHi(name) {
        console.log(`Hi! ${this.name}`);
        console.log(`Hi! ${name}`)
    },
    emoji: '✅',
};

let done = () => this.emoji;
user.done = done();

user.sayHi('Charles');
console.log(user.done);