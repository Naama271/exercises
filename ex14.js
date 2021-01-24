//ex.14

const input = require(`readline-sync`);

let int = input.question("length of the array:");

printMaxmin(int);

function printMaxmin(int){

var regExp = /[a-zA-Z!@#$%^&*()_+\-=[{};':",.<>]/g;
if(regExp.test(int)){
    throw 'only numbers';
} 

let arraylen = parseInt(int); 

var array = [];

for (var i=0; i<arraylen; i++) {

var item = Math.floor((Math.random() * 50) + 1);
array.push(item);

 }

console.log(array);
var max = Math.max(...array);
var min = Math.min(...array);

console.log("max is: " + max);
console.log("min is: " + min);
}