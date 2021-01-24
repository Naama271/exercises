//ex.15

const input = require(`readline-sync`);
let str1 = input.question("Write the integers to reverse (add space): ");

var regExp = /[a-zA-Z]/g;
             
if(regExp.test(str1)){
 throw 'contain non-numeric characters'; 
} 


 myFunction();

function myFunction() {

var array1 = str1.split(" ");

//console.log(array1);

var array = array1.reverse(); 

console.log(array);
  }