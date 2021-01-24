
const input = require(`readline-sync`);

let str = input.question("write the string:");

anotherString = str.replace(/ /g, '*');

console.log(anotherString);