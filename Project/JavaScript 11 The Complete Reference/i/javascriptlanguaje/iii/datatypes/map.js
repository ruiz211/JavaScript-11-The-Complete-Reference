function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let mapPersons = new Map();
mapPersons.set(uuidv4(), "Charles");
mapPersons.set(uuidv4(), "John");
mapPersons.set(uuidv4(), "Victoria");
mapPersons.set(uuidv4(), "Eve");

mapPersons.forEach((value, key) => console.log(`key: ${key}, value: ${value.toUpperCase()}`));

