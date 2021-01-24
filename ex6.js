

  const input = require(`readline-sync`);


  let numberstring = input.question("Please write a number between 0-9: ");
 //  console.log(typeof(numberstring));

   var regExp = /[a-zA-Z]/g;
               
   if(regExp.test(numberstring)){
    throw 'contain non-numeric characters'; 
   } 

  let number = parseInt(numberstring);

  if (number > 10){
   
    console.log("thank you") ;

} else if (number < 10) {

  console.log("your answer is:" + numberstring   );
    for (number = 0; number <= 10; number++) {
    
    // console.log("your answer is:" + numberstring   );
 // numberstring = input.question("Please write a number between 0-9: ");
     if(regExp.test(numberstring)){
        throw 'contain non-numeric characters';   
    } 
     number = parseInt(numberstring);
   
  }

} else {
  throw 'contain non-numeric characters';   
  
}

/*
  for (number = 0; number <= 10; number++) {
    
    // console.log("your answer is:" + numberstring   );
 // numberstring = input.question("Please write a number between 0-9: ");
     if(regExp.test(numberstring)){
        throw 'contain non-numeric characters';   
    } 
     number = parseInt(numberstring);
   
  }

 for (i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

larger10(); */