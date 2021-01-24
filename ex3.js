
   const input = require(`readline-sync`);

   let numberstring = input.question("Please write a number between 0-9: ");
  //  console.log(typeof(numberstring));

    var regExp = /[a-zA-Z]/g;
                
    if(regExp.test(numberstring)){
        throw 'contain non-numeric characters';   
    } 

   let number = parseInt(numberstring);
  /* if (isNaN(number))  {
    //console.log("Please write a number");
    throw 'contain non-numeric characters';
   }*/

   
 
   console.log(number);
 
  
function myFunction() {
  
    switch(number) {
      case 0:
        console.log("ZERO");
      break;
      case 1:
        console.log("ONE");
      break;
      case 2:
        console.log("TWO");
      break;
      case 3:
        console.log("THREE");
      break;
      case 4:
        console.log("FOUR");
      break;
      case 5:
        console.log("FIVE");
      break;
      case 6:
        console.log("SIX");
      break;
      case 7:
        console.log("SEVEN");
      break;
      case 8:
        console.log("EIGHT");
      break;
      case 9:
        console.log("NINE");
      break;
      default:
        console.log("This number is not between 0-9");
    }
  }

  myFunction() ;

