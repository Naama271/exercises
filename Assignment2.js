// assignment 2

const input = require(`readline-sync`);

console.log("<////---Welcome to The Game of War---////>");


var name = input.question("Please enter your name:");
console.log("Hello " + name + "!" + " You have 50 ILS" );
var newBet = 50;

round();

function round(){
    
  //  console.log(newBet);
let bet = input.question("Place your bet for the next round: 1 to " + newBet +" :");
let betnum = parseInt(bet);

checkBet(betnum);

function checkBet(betnum) {
if (betnum >= 1 && betnum <= newBet ) {
    console.log( betnum + "!" + " great let's start" ); 
} else {
    console.log(betnum + " is not an answer")
    console.log('if you lie so bye bye')
    throw '';
}
}
compareCard();

function compareCard(){

let cardComp  = Math.floor((Math.random() * 12) + 1);    
let cardPlayer = Math.floor((Math.random() * 12) + 1);

if (cardComp === cardPlayer) {
    compareCard();
}

console.log("your card is " + cardPlayer);
console.log("my card is " + cardComp);

if (cardPlayer > cardComp) {
   newBet = newBet + betnum;
   console.log("you won! you have " + newBet + " ILS" );
   nextStep(newBet);
} else if (cardPlayer < cardComp) {
     newBet = newBet - betnum;
    if (newBet > 0){
    console.log("you lost! you have " + newBet + " ILS" );
    nextStep(newBet);
    }else{
        throw 'you broke! game over';   
         }
     } 
   }
}


function nextStep(newBet){
   var answers = ['play another', 'take my money and leave'];
   var index = input.keyInSelect(answers, "What whould you like to do?");

  //console.log(answers[index] + ' is your answer');
    
    index;
    switch(index) {
      case 0:
        round(newBet);
      break;
      case 1:
        console.log( newBet +" ILS are yours!")  
        throw 'game over';
      break;

      default:
        console.log("Not an answer");
        nextStep();
    }
 
}