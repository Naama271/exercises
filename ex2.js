
   const input = require(`readline-sync`);

   let number1 = input.question("Please write a number between 1-10: ");
   let number2 = input.question("Please write another number between 1-10: ");
   let sum = parseInt(number1) + parseInt(number2);
 
   //console.log(number1, number2);
   //console.log(sum);
 
   
   function firstFunction (){

   if (sum == 10) {
    console.log("makes 10");
  } else {
    console.log("nope");
  }
}

firstFunction();