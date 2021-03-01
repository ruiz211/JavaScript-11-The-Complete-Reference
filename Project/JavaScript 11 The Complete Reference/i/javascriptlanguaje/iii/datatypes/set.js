let setPersons = new Set();

setPersons.add("John");
setPersons.add("Charles");
setPersons.add("John");

setPersons.forEach(value => console.log(value));
console.log(setPersons.has("Johnathan"));