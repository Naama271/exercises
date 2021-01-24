

  const input = require(`readline-sync`);


  let numberstring = input.question("Please enter positive number to factorial: ");
 //  console.log(typeof(numberstring));

   var regExp = /[a-zA-Z]/g;
               
   if(regExp.test(numberstring)){
    throw 'contain non-numeric characters'; 
   } 

  let number = parseInt(numberstring);
  if(number<0){
    throw 'only possitive number'; 
   } 

  //var str = '';
 // console.log(number);
  var array = [];
  
  for (var x = number ; x > 0; x--) {
   //console.log(number);
   
   array.push(x);
//str += '*'+ x  ;
//console.log(array);
//console.log(x);
}

var sum = 1;
function multi (array){
  
  for (var i = 0 ; i < array.length; i++) {
  // console.log(array[i]);
  
  sum = sum*(array[i]);
  //console.log(sum);
}
console.log("the answer is:" + sum);
}

//console.log(array);
multi(array);
//console.log(sum);