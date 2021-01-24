//ex.9



const input = require(`readline-sync`);


let numberstring = input.question("prints all of the prime numbers between 1 and:");
//  console.log(typeof(numberstring));

 var regExp = /[a-zA-Z]/g;
             
 if(regExp.test(numberstring)){
  throw 'contain non-numeric characters'; 
 } 

let n = parseInt(numberstring);
if(n<0){
  throw 'only possitive number'; 
 } 
 if (n===1) {
  console.log("no prime"); 
  throw ''; 
 } 

 //var arr = [2];
 var array= [];

 primeNum(n);

 function primeNum(n) {
  var arr = [2];

  if (n <= 8) {
      for (var i = 2 ; i<=n ; i++) {

        if (i % 2 !== 0){
        arr.push(i);}

        else{
          continue;
        } 
          }
          console.log(arr); 
        }

 else {

      for (var x = 2 ; x <= n ; x++) {
        var array1 = [2,3,5,7];
        
        if  (x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0 ) {
        // console.log(x);
          array.push(x);
      } 

}
var allprime = array1.concat(array);
console.log(allprime);
  }
  
}

//primeNum(number);
