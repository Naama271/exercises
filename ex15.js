//ex.15

const input = require(`readline-sync`);


 myFunction();

function myFunction() {

let str1 = input.question("Write array1: ");
let str2 = input.question("Write array2: ");

var array1 = str1.split(" ");
var array2 = str2.split(" ");

console.log(array1);
console.log(array2);

var array = array1.concat(array2); 
console.log("the result is:");
console.log(array);
  }