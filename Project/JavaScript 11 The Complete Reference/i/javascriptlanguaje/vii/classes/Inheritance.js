"use strict";

class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Vertebrates extends Animal {
    walk = false;
    jump = false;
    swim = false;
    fly = false;

    constructor(name, walk, jump, swim, fly) {
        super(name);
        this.walk = walk;
        this.jump = jump;
        this.swim = swim;
        this.fly = fly;
    }
}

class WarmBlooded extends Vertebrates {
    mammal = false;
    bird = false;

    constructor(name, walk, jump, swim, fly, mammal, bird) {
        super(name, walk, jump, swim, fly);
        this.mammal = mammal;
        this.bird = bird;
    }
}

class Mammals extends WarmBlooded {

}

class Bear extends Mammals {

}

let vertebrate = new Vertebrates("No name", false, true, true, false);
console.log(vertebrate.name);

let warm = new WarmBlooded("No name for now", false, true, true, false, true, false);
console.log(warm.mammal);
console.log(warm.bird);